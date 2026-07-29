function doGet(e) {
  return handleRequest(e, "GET");
}

function doPost(e) {
  return handleRequest(e, "POST");
}

function handleRequest(e, method) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    // Headers updated to include 'id' and 'is_edited'
    const messagesSheet = getOrCreateSheet(ss, "Messages", ["id", "created_at", "username", "message", "target_dm", "is_edited"]);
    const usersSheet = getOrCreateSheet(ss, "Users", ["username", "password", "created_at"]);

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
      response = handleRegister(usersSheet, params.username, params.password);
    } else if (action === "login") {
      response = handleLogin(usersSheet, params.username, params.password);
    } else if (action === "send") {
      response = handleSendMessage(messagesSheet, usersSheet, params);
    } else if (action === "edit") {
      response = handleEditMessage(messagesSheet, usersSheet, params);
    } else if (action === "upload") {
      response = handleFileUpload(messagesSheet, usersSheet, params);
    } else if (action === "get_users") {
      response = { users: fetchUsers(usersSheet) };
    } else {
      response = {
        messages: fetchMessages(messagesSheet),
        users: fetchUsers(usersSheet)
      };
    }

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/* --- HELPER FUNCTIONS --- */

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}

function handleRegister(usersSheet, username, password) {
  if (!username || !password) return { error: "Username and password required." };
  const data = usersSheet.getDataRange().getValues();
  const lowerUser = username.toLowerCase();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString().toLowerCase() === lowerUser) {
      return { error: "Username already exists." };
    }
  }

  usersSheet.appendRow([username, password, new Date().toISOString()]);
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
  const { username, password, message, target_dm } = params;
  if (!username || !message) return { error: "Missing fields." };

  const loginCheck = handleLogin(usersSheet, username, password);
  if (loginCheck.error) return { error: "Auth failed." };

  const msgId = Utilities.getUuid(); // Unique ID for each message

  messagesSheet.appendRow([
    msgId,
    new Date().toISOString(),
    username,
    message,
    target_dm || "",
    false // is_edited initial state
  ]);

  return { success: true, id: msgId };
}

function handleEditMessage(messagesSheet, usersSheet, params) {
  const { username, password, message_id, new_message } = params;
  if (!username || !message_id || !new_message) return { error: "Missing fields." };

  const loginCheck = handleLogin(usersSheet, username, password);
  if (loginCheck.error) return { error: "Auth failed." };

  const data = messagesSheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(message_id)) {
      // Authorization check: ensure author matches
      if (data[i][2] !== username) {
        return { error: "You can only edit your own messages." };
      }
      // Row in Google Sheets is 1-indexed (i + 1)
      messagesSheet.getRange(i + 1, 4).setValue(new_message); // Update 'message' column
      messagesSheet.getRange(i + 1, 6).setValue(true);        // Set 'is_edited' column to true
      return { success: true };
    }
  }

  return { error: "Message not found." };
}

function handleFileUpload(messagesSheet, usersSheet, params) {
  const { username, password, fileName, fileType, fileData, target_dm } = params;
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
    false
  ]);

  return { success: true, id: msgId };
}

function fetchUsers(usersSheet) {
  const data = usersSheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  return data.slice(1).map(row => row[0].toString()).filter(Boolean);
}

function fetchMessages(messagesSheet) {
  const data = messagesSheet.getDataRange().getValues();
  if (data.length <= 1) return [];

  return data.slice(1).map(row => ({
    id: row[0],
    created_at: row[1],
    username: row[2],
    message: row[3],
    target_dm: row[4] || "",
    is_edited: row[5] === true || row[5] === "true"
  }));
}
