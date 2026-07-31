function doGet(e) {
  return handleRequest(e, "GET");
}

function doPost(e) {
  return handleRequest(e, "POST");
}

function handleRequest(e, method) {
  const lock = LockService.getScriptLock();
  lock.tryLock(5000);

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const messagesHeaders = [
      "id", "created_at", "username", "message", "target_dm", "is_edited", "reply_to", "client_id", "reactions"
    ];
    const messagesSheet = getOrCreateSheet(ss, "Messages", messagesHeaders);
    const usersSheet = getOrCreateSheet(ss, "Users", ["username", "password", "created_at"]);
    const profilesSheet = getOrCreateSheet(ss, "Profiles", ["username", "pronouns", "bio", "avatar_url"]);

    migrateHeaders(messagesSheet, messagesHeaders);

    let params = {};
    if (method === "GET") {
      params = e ? e.parameter : {};
    } else if (method === "POST") {
      if (e && e.postData && e.postData.contents) {
        try {
          params = JSON.parse(e.postData.contents);
        } catch (err) {
          params = e.parameter || {};
        }
      } else {
        params = e ? e.parameter : {};
      }
    }

    const action = params.action;
    let response = {};

    if (action === "register") {
      response = handleRegister(usersSheet, profilesSheet, params.username, params.password);
    } else if (action === "login") {
      response = handleLogin(usersSheet, params.username, params.password);
    } else if (action === "send") {
      response = handleSendMessage(messagesSheet, usersSheet, params);
      if (params.username && params.target_dm) {
        updateTypingState(params.username, params.target_dm, false);
      }
    } else if (action === "edit") {
      response = handleEditMessage(messagesSheet, usersSheet, params);
    } else if (action === "upload") {
      response = handleFileUpload(messagesSheet, usersSheet, params);
    } else if (action === "react") {
      response = handleReact(messagesSheet, usersSheet, params);
    } else if (action === "typing") {
      response = handleTyping(params);
    } else if (action === "update_profile") {
      response = handleUpdateProfile(usersSheet, profilesSheet, params);
    } else if (action === "get_users") {
      response = { users: fetchUsers(usersSheet) };
    } else {
      response = {
        messages: fetchMessages(messagesSheet),
        users: fetchUsers(usersSheet),
        profiles: fetchProfiles(profilesSheet, usersSheet),
        typing_users: getActiveTypingUsers()
      };
    }

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error("Error in handleRequest:", err);
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/* --- PROFILE MANAGEMENT HELPERS --- */

function handleUpdateProfile(usersSheet, profilesSheet, params) {
  const { username, password, pronouns, bio, avatar_url } = params;
  const loginCheck = handleLogin(usersSheet, username, password);
  if (loginCheck.error) return { error: "Auth failed." };

  const data = profilesSheet.getDataRange().getValues();
  let foundIndex = -1;

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString().toLowerCase() === username.toLowerCase()) {
      foundIndex = i + 1;
      break;
    }
  }

  if (foundIndex !== -1) {
    if (pronouns !== undefined) profilesSheet.getRange(foundIndex, 2).setValue(pronouns);
    if (bio !== undefined) profilesSheet.getRange(foundIndex, 3).setValue(bio);
    if (avatar_url !== undefined) profilesSheet.getRange(foundIndex, 4).setValue(avatar_url);
  } else {
    profilesSheet.appendRow([username, pronouns || "", bio || "", avatar_url || ""]);
  }

  return { success: true };
}

function fetchProfiles(profilesSheet, usersSheet) {
  const data = profilesSheet.getDataRange().getValues();
  const profiles = {};

  if (data.length > 1) {
    for (let i = 1; i < data.length; i++) {
      const user = data[i][0] ? data[i][0].toString() : "";
      if (user) {
        profiles[user.toLowerCase()] = {
          username: user,
          pronouns: data[i][1] || "",
          bio: data[i][2] || "",
          avatar_url: data[i][3] || ""
        };
      }
    }
  }

  if (usersSheet) {
    const userData = usersSheet.getDataRange().getValues();
    for (let j = 1; j < userData.length; j++) {
      const uName = userData[j][0] ? userData[j][0].toString() : "";
      const createdAt = userData[j][2] || "";
      if (uName) {
        const key = uName.toLowerCase();
        if (!profiles[key]) {
          profiles[key] = { username: uName, pronouns: "", bio: "", avatar_url: "" };
        }
        profiles[key].created_at = createdAt;
      }
    }
  }

  return profiles;
}

/* --- TYPING INDICATOR CACHE HELPERS --- */

function handleTyping(params) {
  const { username, target_dm, is_typing } = params;
  if (!username) return { error: "Username required" };
  const target = target_dm || "channel:general-chat";
  
  updateTypingState(username, target, is_typing !== false && is_typing !== "false");
  return { success: true };
}

function updateTypingState(username, target, isTyping) {
  const cache = CacheService.getScriptCache();
  const cacheKey = "typing_data";
  let typingData = {};

  try {
    const raw = cache.get(cacheKey);
    if (raw) typingData = JSON.parse(raw);
  } catch (e) {
    typingData = {};
  }

  const now = Date.now();
  if (!typingData[target]) typingData[target] = {};

  if (isTyping) {
    typingData[target][username] = now;
  } else {
    delete typingData[target][username];
  }

  Object.keys(typingData).forEach(room => {
    Object.keys(typingData[room]).forEach(user => {
      if (now - typingData[room][user] > 5000) {
        delete typingData[room][user];
      }
    });
    if (Object.keys(typingData[room]).length === 0) {
      delete typingData[room];
    }
  });

  cache.put(cacheKey, JSON.stringify(typingData), 10);
}

function getActiveTypingUsers() {
  const cache = CacheService.getScriptCache();
  const cacheKey = "typing_data";
  let typingData = {};

  try {
    const raw = cache.get(cacheKey);
    if (raw) typingData = JSON.parse(raw);
  } catch (e) {
    return {};
  }

  const now = Date.now();
  const activeMap = {};

  Object.keys(typingData).forEach(target => {
    const activeInRoom = [];
    Object.keys(typingData[target]).forEach(user => {
      if (now - typingData[target][user] <= 5000) {
        activeInRoom.push(user);
      }
    });
    if (activeInRoom.length > 0) {
      activeMap[target] = activeInRoom;
    }
  });

  return activeMap;
}

/* --- CORE HELPERS --- */

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}

function migrateHeaders(sheet, expectedHeaders) {
  const lastCol = sheet.getLastColumn();
  const currentHeaders = lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues()[0] : [];
  const missing = expectedHeaders.filter(h => currentHeaders.indexOf(h) === -1);
  if (missing.length > 0) {
    sheet.getRange(1, currentHeaders.length + 1, 1, missing.length).setValues([missing]);
  }
}

function handleRegister(usersSheet, profilesSheet, username, password) {
  if (!username || !password) return { error: "Username and password required." };
  const data = usersSheet.getDataRange().getValues();
  const lowerUser = username.toLowerCase();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString().toLowerCase() === lowerUser) {
      return { error: "Username already exists." };
    }
  }

  const now = new Date().toISOString();
  usersSheet.appendRow([username, password, now]);
  profilesSheet.appendRow([username, "", "", ""]);
  return { success: true, message: "Registered successfully!" };
}

function handleLogin(usersSheet, username, password) {
  if (!username || !password) return { error: "Username and password required." };
  const data = usersSheet.getDataRange().getValues();
  const lowerUser = username.toLowerCase();

  for (let i = 1; i < data.length; i++) {
    const sheetUser = data[i][0] ? data[i][0].toString() : "";
    const sheetPass = data[i][1] ? data[i][1].toString() : "";

    if (sheetUser.toLowerCase() === lowerUser) {
      return sheetPass === password ? { success: true } : { error: "Incorrect password." };
    }
  }

  return { error: "User not found." };
}

function handleSendMessage(messagesSheet, usersSheet, params) {
  const { username, password, message, target_dm, reply_to, client_id } = params;
  if (!username || !message) return { error: "Missing fields." };

  const loginCheck = handleLogin(usersSheet, username, password);
  if (loginCheck.error) return { error: "Auth failed." };

  const msgId = Utilities.getUuid();

  messagesSheet.appendRow([
    msgId,
    new Date().toISOString(),
    username,
    message,
    target_dm || "",
    false,
    reply_to || "",
    client_id || "",
    "{}" 
  ]);

  return { success: true, id: msgId, client_id: client_id || "" };
}

function handleEditMessage(messagesSheet, usersSheet, params) {
  const { username, password, message_id, new_message } = params;
  if (!username || !message_id || !new_message) return { error: "Missing fields." };

  const loginCheck = handleLogin(usersSheet, username, password);
  if (loginCheck.error) return { error: "Auth failed." };

  const data = messagesSheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(message_id)) {
      if (data[i][2] !== username) {
        return { error: "You can only edit your own messages." };
      }
      messagesSheet.getRange(i + 1, 4).setValue(new_message);
      messagesSheet.getRange(i + 1, 6).setValue(true);
      return { success: true };
    }
  }

  return { error: "Message not found." };
}

function handleFileUpload(messagesSheet, usersSheet, params) {
  const { username, password, fileName, fileType, fileData, target_dm, reply_to, client_id } = params;
  const loginCheck = handleLogin(usersSheet, username, password);
  if (loginCheck.error) return { error: "Auth failed." };

  let formattedMessage = "";
  try {
    const base64Content = fileData.includes(",") ? fileData.split(",")[1] : fileData;
    const decoded = Utilities.base64Decode(base64Content);
    const blob = Utilities.newBlob(decoded, fileType || 'application/octet-stream', fileName);
    const file = DriveApp.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const directDownloadUrl = "https://drive.google.com/uc?export=view&id=" + file.getId();
    formattedMessage = fileType && fileType.startsWith("image/")
      ? `[IMAGE:${directDownloadUrl}|${fileName}]`
      : `[FILE:${file.getUrl()}|${fileName}]`;
  } catch (err) {
    formattedMessage = fileType && fileType.startsWith("image/")
      ? `[IMAGE:${fileData}|${fileName}]`
      : `[FILE:${fileData}|${fileName}]`;
  }

  const msgId = Utilities.getUuid();
  messagesSheet.appendRow([
    msgId,
    new Date().toISOString(),
    username,
    formattedMessage,
    target_dm || "",
    false,
    reply_to || "",
    client_id || "",
    "{}"
  ]);

  return { success: true, id: msgId, client_id: client_id || "" };
}

function handleReact(messagesSheet, usersSheet, params) {
  const { username, password, message_id, emoji } = params;
  if (!username || !message_id || !emoji) return { error: "Missing fields." };

  const loginCheck = handleLogin(usersSheet, username, password);
  if (loginCheck.error) return { error: "Auth failed." };

  const data = messagesSheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(message_id)) {
      let reactionsJson = data[i][8] || "{}";
      let reactions = {};

      try {
        if (reactionsJson !== "{}") {
            reactions = JSON.parse(reactionsJson);
        }
      } catch (err) {
        reactions = {}; 
      }

      if (!reactions[emoji]) {
        reactions[emoji] = [];
      }

      const userIndex = reactions[emoji].indexOf(username);
      if (userIndex > -1) {
        reactions[emoji].splice(userIndex, 1); 
        if (reactions[emoji].length === 0) {
          delete reactions[emoji];
        }
      } else {
        reactions[emoji].push(username); 
      }

      messagesSheet.getRange(i + 1, 9).setValue(JSON.stringify(reactions)); 
      return { success: true, reactions: reactions };
    }
  }

  return { error: "Message not found." };
}

function fetchUsers(usersSheet) {
  const data = usersSheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  return data.slice(1).map(row => row[0].toString()).filter(Boolean);
}

function fetchMessages(messagesSheet) {
  const data = messagesSheet.getDataRange().getValues();
  if (data.length <= 1) return [];

  return data.slice(1).map(row => {
    let reactions = {};
    try {
      reactions = row[8] ? JSON.parse(row[8]) : {};
    } catch (err) {
      reactions = {};
    }

    return {
      id: row[0],
      created_at: row[1],
      username: row[2],
      message: row[3],
      target_dm: row[4] || "",
      is_edited: row[5] === true || row[5] === "true",
      reply_to: row[6] || "",
      client_id: row[7] || "",
      reactions: reactions
    };
  });
}
