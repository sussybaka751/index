<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Discord</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'gg sans', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body {
    background: #313338;
    height: 100vh;
    color: #dbdee1;
    display: flex;
    overflow: hidden;
    user-select: none;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-pop { animation: fadeIn 0.15s cubic-bezier(0.1, 0.9, 0.2, 1) forwards; }
  .processing-state { opacity: 0.7; pointer-events: none; }

  /* DISCORD LOGIN SCREEN */
  #login-container {
    width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; 
    background: #1e1f22; position: relative; z-index: 10;
  }

  #login { 
    width: 480px; background: #313338; border-radius: 5px; padding: 32px; 
    display: flex; flex-direction: column; box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }
  .login-header { text-align: center; margin-bottom: 20px; }
  .discord-logo { width: 48px; height: 48px; fill: #5865f2; margin-bottom: 8px; }
  .login-title { color: #f2f3f5; font-size: 24px; font-weight: 600; margin-bottom: 8px; }
  .login-subtitle { color: #949ba4; font-size: 14px; }

  .login-form { width: 100%; margin-top: 12px; }
  .field-group { margin-bottom: 20px; }
  label { display: block; font-size: 12px; font-weight: 700; color: #b5bac1; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
  
  input[type="text"], input[type="password"] {
    width: 100%; padding: 10px; border-radius: 3px; font-size: 16px; background: #1e1f22; color: #dbdee1;
    border: 1px solid transparent; outline: none; transition: border 0.2s;
  }
  input[type="text"]:focus, input[type="password"]:focus { border-color: #00a8fc; }

  .login-btn {
    width: 100%; padding: 12px; border: none; border-radius: 3px;
    background: #5865f2; color: white; cursor: pointer;
    font-size: 16px; font-weight: 500; transition: background 0.2s; margin-top: 4px;
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .login-btn:hover { background: #4752c4; }

  .auth-toggle { margin-top: 16px; font-size: 14px; color: #949ba4; text-align: left; }
  .auth-toggle a { color: #00a8fc; text-decoration: none; cursor: pointer; font-weight: 500; }
  .auth-toggle a:hover { text-decoration: underline; }

  /* MAIN APP LAYOUT */
  #app { display: flex; width: 100vw; height: 100vh; background: #313338; }
  
  .servers-bar { 
    width: 72px; background: #1e1f22; padding: 12px 0; 
    display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; 
    position: relative;
  }
  .server-icon {
    width: 48px; height: 48px; border-radius: 50%; background: #313338; color: #dbdee1;
    display: flex; align-items: center; justify-content: center; cursor: pointer; 
    transition: all 0.2s ease; font-size: 20px; position: relative;
  }
  .server-icon:hover, .server-icon.active { border-radius: 16px; background: #5865f2; color: #ffffff; }
  .server-separator { width: 32px; height: 2px; background: #35363c; border-radius: 1px; margin: 4px 0; }

  /* SIDEBAR */
  .sidebar { width: 240px; background: #2b2d31; display: flex; flex-direction: column; flex-shrink: 0; }
  .sidebar-header { 
    height: 48px; border-bottom: 1px solid #1f2023; padding: 0 16px; 
    display: flex; align-items: center; justify-content: space-between; 
    font-weight: 600; color: #f2f3f5; font-size: 15px; cursor: pointer; box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  }
  
  .channel-list { flex: 1; overflow-y: auto; padding: 12px 8px; }
  .sidebar-section { 
    padding: 12px 8px 4px 8px; font-size: 12px; font-weight: 700; color: #949ba4; 
    text-transform: uppercase; letter-spacing: 0.25px; display: flex; justify-content: space-between; align-items: center; 
  }
  .add-btn { cursor: pointer; font-size: 16px; line-height: 1; transition: color 0.2s; color: #949ba4; }
  .add-btn:hover { color: #dbdee1; }

  .channel-item { 
    display: flex; align-items: center; padding: 6px 8px; border-radius: 4px; 
    color: #949ba4; cursor: pointer; margin-top: 2px; font-size: 14.5px; gap: 8px; transition: background 0.15s, color 0.15s; 
    font-weight: 500;
  }
  .channel-item:hover { background: #35373c; color: #dbdee1; }
  .channel-item.active { background: #404249; color: #ffffff; }
  .channel-item .prefix { font-size: 18px; color: #80848e; font-weight: 400; width: 16px; text-align: center; }
  
  .dm-user-avatar { 
    width: 24px; height: 24px; border-radius: 50%; background: #5865f2; 
    display: flex; align-items: center; justify-content: center; color: white; font-size: 11px; font-weight: 600; 
    background-size: cover; background-position: center;
  }

  /* Bottom User Profile Panel */
  .user-profile-panel {
    height: 55px; background: #232428; padding: 0 8px; display: flex; align-items: center; justify-content: space-between;
    cursor: pointer; transition: background 0.15s;
  }
  .user-profile-panel:hover { background: #2b2d31; }
  .user-info-wrapper { display: flex; align-items: center; gap: 8px; overflow: hidden; }
  .user-avatar-container { position: relative; width: 32px; height: 32px; flex-shrink: 0; }
  .user-profile-avatar { 
    width: 32px; height: 32px; border-radius: 50%; background: #5865f2; 
    display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; font-size: 14px;
    background-size: cover; background-position: center;
  }
  .status-dot { position: absolute; bottom: -1px; right: -1px; width: 10px; height: 10px; background: #23a55a; border-radius: 50%; border: 2px solid #232428; }
  .user-names { display: flex; flex-direction: column; overflow: hidden; }
  .user-display-name { font-size: 14px; font-weight: 600; color: #f2f3f5; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .user-tag { font-size: 12px; color: #949ba4; }

  /* CHAT VIEWPORT */
  #chat { flex: 1; display: flex; flex-direction: column; overflow: hidden; position: relative; background: #313338; }
  .chat-header { 
    height: 48px; background: #313338; border-bottom: 1px solid #1f2023; 
    display: flex; align-items: center; justify-content: space-between; padding: 0 16px; 
    font-weight: 600; box-shadow: 0 1px 2px rgba(0,0,0,0.2); z-index: 2;
  }
  .header-left { display: flex; align-items: center; font-size: 15px; color: #f2f3f5; gap: 8px; }

  /* MESSAGES CONTAINER */
  #messages { flex: 1; overflow-y: auto; padding: 16px 0; display: flex; flex-direction: column; gap: 4px; scroll-behavior: smooth; }
  
  .message { display: flex; padding: 4px 16px; position: relative; max-width: 100%; word-wrap: break-word; margin-top: 12px; cursor: pointer; transition: background 0.1s; }
  .message:hover { background: rgba(0, 0, 0, 0.08); }
  
  .avatar { 
    position: absolute; left: 16px; top: 4px; width: 40px; height: 40px; border-radius: 50%; 
    background: #5865f2; display: flex; align-items: center; justify-content: center; 
    color: white; font-weight: 600; font-size: 16px; cursor: pointer; background-size: cover; background-position: center;
  }
  .message-content { display: flex; flex-direction: column; margin-left: 56px; width: 100%; }
  
  .message-header { display: flex; align-items: baseline; gap: 8px; margin-bottom: 2px; }
  .message b { color: #f2f3f5; font-size: 15px; font-weight: 500; cursor: pointer; }
  .message b:hover { text-decoration: underline; }
  .time { font-size: 12px; color: #949ba4; font-weight: 400; }
  .text { color: #dbdee1; font-size: 15px; line-height: 1.375rem; word-break: break-word; }
  .edited-tag { font-size: 11px; color: #949ba4; margin-left: 4px; }
  
  .reply-reference {
    font-size: 13px; color: #b5bac1; display: flex; align-items: center; gap: 6px; margin-bottom: 4px; position: relative; cursor: pointer;
  }
  .reply-reference::before {
    content: ''; position: absolute; left: -34px; top: 50%; width: 28px; height: 12px;
    border-left: 2px solid #4e5058; border-top: 2px solid #4e5058; border-top-left-radius: 6px;
  }

  /* REACTIONS */
  .reactions-container { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
  .reaction-badge { background: #2b2d31; border: 1px solid #383a40; border-radius: 6px; padding: 2px 6px; font-size: 13px; display: inline-flex; align-items: center; gap: 4px; cursor: pointer; }
  .reaction-badge:hover { background: #35373c; }
  .reaction-badge.reacted { background: #3b4252; border-color: #5865f2; }

  /* MEDIA */
  .chat-image { max-width: 320px; max-height: 320px; border-radius: 8px; margin-top: 6px; cursor: pointer; object-fit: cover; }
  .chat-file-box {
    display: inline-flex; align-items: center; gap: 10px; background: #2b2d31; 
    border: 1px solid #1f2023; border-radius: 8px; padding: 10px 14px; margin-top: 6px;
    max-width: 300px; text-decoration: none; color: #00a8fc; font-weight: 500; font-size: 14px;
  }

  /* INPUT AREA */
  #bottom { padding: 0 16px 24px 16px; position: relative; }
  
  .reply-banner {
    background: #2b2d31; color: #b5bac1; font-size: 13px; padding: 8px 16px;
    border-radius: 8px 8px 0 0; display: flex; justify-content: space-between;
    align-items: center; margin-bottom: -8px; z-index: 1; position: relative; font-weight: 500;
  }
  .reply-banner-close { cursor: pointer; color: #f23f43; font-weight: bold; font-size: 14px; }

  /* TYPING INDICATOR */
  .typing-indicator {
    height: 24px; display: flex; align-items: center; gap: 8px;
    font-size: 12px; font-weight: 600; color: #dbdee1; padding: 0 4px 4px 4px;
  }
  .typing-dots { display: inline-flex; gap: 2px; }
  .typing-dots span {
    width: 4px; height: 4px; background-color: #dbdee1; border-radius: 50%;
    animation: typingBlink 1.4s infinite ease-in-out both;
  }
  .typing-dots span:nth-child(1) { animation-delay: 0s; }
  .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
  .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

  @keyframes typingBlink {
    0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
    40% { opacity: 1; transform: scale(1.2); }
  }

  .input-wrapper { 
    background: #383a40; border-radius: 8px; padding: 0 16px; 
    display: flex; align-items: center; gap: 16px; min-height: 44px; z-index: 2; position: relative;
  }
  #message { flex: 1; background: transparent; color: #dbdee1; font-size: 15px; border: none; outline: none; padding: 11px 0; }
  #message::placeholder { color: #80848e; }

  .plus-btn { 
    width: 24px; height: 24px; border-radius: 50%; background: #4e5058; color: #dbdee1; 
    font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; 
    cursor: pointer; transition: background 0.15s, color 0.15s; flex-shrink: 0;
  }
  .plus-btn:hover { background: #dbdee1; color: #313338; }

  /* POPUPS & MENUS */
  .glass-popup { 
    position: absolute; bottom: 75px; left: 16px; background: #2b2d31; 
    border: 1px solid #1f2023; border-radius: 8px; padding: 8px; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24); z-index: 100; min-width: 180px; 
  }
  .hidden { display: none !important; }

  .menu-option { 
    display: flex; align-items: center; gap: 10px; padding: 8px 10px; background: transparent; 
    border: none; color: #b5bac1; border-radius: 4px; cursor: pointer; font-size: 14px; width: 100%; 
    transition: background 0.15s, color 0.15s; text-align: left; font-weight: 500;
  }
  .menu-option:hover { background: #5865f2; color: white; }

  .msg-context-menu {
    position: fixed; background: #232428; border: 1px solid #111214; 
    border-radius: 8px; padding: 6px; box-shadow: 0 8px 16px rgba(0,0,0,0.4); 
    z-index: 1000; display: flex; flex-direction: column; gap: 4px; min-width: 150px;
  }

  .emoji-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px; max-width: 240px; padding: 4px; }
  .emoji-item { background: transparent; border: none; font-size: 20px; cursor: pointer; border-radius: 4px; padding: 4px; }
  .emoji-item:hover { background: #35373c; transform: scale(1.15); }

  /* USER PROFILE CARD MODAL */
  .profile-popover {
    position: fixed; bottom: 65px; left: 80px; width: 310px; background: #232428; 
    border-radius: 12px; overflow: hidden; box-shadow: 0 12px 28px rgba(0,0,0,0.5); 
    z-index: 2000; border: 1px solid #111214;
  }
  .profile-banner-top { height: 60px; background: #5865f2; position: relative; }
  .profile-avatar-large {
    width: 72px; height: 72px; border-radius: 50%; background: #383a40; 
    border: 6px solid #232428; position: absolute; left: 16px; top: 20px; 
    display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: bold; color: white;
    background-size: cover; background-position: center; cursor: pointer; overflow: hidden;
  }
  .profile-avatar-overlay {
    position: absolute; width: 100%; height: 100%; background: rgba(0,0,0,0.4); 
    display: flex; align-items: center; justify-content: center; font-size: 11px; text-transform: uppercase;
    font-weight: bold; color: white; opacity: 0; transition: opacity 0.15s; text-align: center;
  }
  .profile-avatar-large:hover .profile-avatar-overlay { opacity: 1; }
  
  .profile-body { padding: 44px 16px 16px 16px; background: #111214; margin: 8px; border-radius: 8px; }
  .profile-username-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
  .profile-username-text { font-size: 18px; font-weight: 700; color: #f2f3f5; }
  .profile-pronouns-input {
    background: transparent; border: 1px solid transparent; color: #b5bac1; font-size: 13px;
    width: 100px; text-align: right; border-radius: 4px; padding: 2px 4px; outline: none;
  }
  .profile-pronouns-input:hover, .profile-pronouns-input:focus { border-color: #383a40; background: #1e1f22; }

  .profile-divider { height: 1px; background: #2b2d31; margin: 12px 0; }
  .profile-section-title { font-size: 11px; font-weight: 700; color: #b5bac1; text-transform: uppercase; margin-bottom: 6px; }
  
  .profile-bio-textarea {
    width: 100%; height: 70px; background: #1e1f22; border: 1px solid transparent; 
    border-radius: 4px; color: #dbdee1; font-size: 13px; padding: 8px; resize: none; outline: none;
  }
  .profile-bio-textarea:focus { border-color: #00a8fc; }
  .profile-bio-readonly { font-size: 13.5px; color: #dbdee1; line-height: 1.4; white-space: pre-wrap; word-break: break-word; }

  /* MODALS */
  .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.7); z-index: 99; display: flex; align-items: center; justify-content: center; }
  .modal-box { background: #313338; border-radius: 5px; width: 440px; padding: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
  .modal-box h3 { color: #f2f3f5; font-size: 20px; font-weight: 600; margin-bottom: 8px; }
  .modal-box input { margin-top: 8px; margin-bottom: 12px; width: 100%; padding: 10px; border-radius: 3px; border: 1px solid #1f2023; background: #1e1f22; color: #dbdee1; outline: none; font-size: 15px; }
  
  .user-select-list { max-height: 180px; overflow-y: auto; margin-bottom: 16px; display: flex; flex-direction: column; gap: 4px; }
  .user-select-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 4px; background: #2b2d31; color: #dbdee1; cursor: pointer; }
  .user-select-item:hover { background: #5865f2; color: #ffffff; }

  .modal-actions { display: flex; justify-content: flex-end; gap: 12px; }
  .modal-actions button { padding: 10px 24px; background: #5865f2; color: white; border: none; border-radius: 3px; cursor: pointer; font-weight: 500; font-size: 14px; }
</style>
</head>
<body>

<!-- LOGIN SCREEN -->
<div id="login-container">
  <div id="login" class="animate-pop">
    <div class="login-header">
      <svg class="discord-logo" viewBox="0 0 127.14 96.36">
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0,-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1,-10.85-5.18c.91-.66,1.8-1.34,2.66-2a68.42,68.42,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,121.64,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74c6.51,0,11.62,5.77,11.43,12.74C53.88,60,48.78,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74c6.5,0,11.62,5.77,11.43,12.74C96.12,60,91,65.69,84.69,65.69Z"/>
      </svg>
      <div class="login-title" id="authTitle">Welcome back!</div>
      <div class="login-subtitle">We're so excited to see you again!</div>
    </div>
    <div class="login-form">
      <div class="field-group">
        <label>Account Username</label>
        <input id="usernameInput" type="text" placeholder="" autocomplete="off">
      </div>
      <div class="field-group">
        <label>Password</label>
        <input id="passwordInput" type="password" placeholder="">
      </div>
      <button id="authBtn" class="login-btn">
        <span id="authBtnText">Log In</span>
      </button>
      
      <div class="auth-toggle">
        <span id="authToggleLabel">Need an account?</span>
        <a id="authToggleBtn">Register</a>
      </div>
    </div>
  </div>
</div>

<!-- MAIN APP -->
<div id="app" class="hidden">
  <!-- Server Bar -->
  <div class="servers-bar">
    <div class="server-icon active" title="Discord Home">
      <svg width="28" height="28" viewBox="0 0 127.14 96.36" style="fill: #ffffff;">
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0,-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1,-10.85-5.18c.91-.66,1.8-1.34,2.66-2a68.42,68.42,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,121.64,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74c6.51,0,11.62,5.77,11.43,12.74C53.88,60,48.78,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74c6.5,0,11.62,5.77,11.43,12.74C96.12,60,91,65.69,84.69,65.69Z"/>
      </svg>
    </div>
    <div class="server-separator"></div>
  </div>

  <!-- Sidebar -->
  <div class="sidebar">
    <div class="sidebar-header">
      <span id="serverNameLabel">Sheets Workspace</span>
      <span style="font-size: 12px; color: #949ba4;">▼</span>
    </div>
    
    <div class="channel-list">
      <div class="sidebar-section">
        <span>Text Channels</span>
        <span class="add-btn" id="openNewThreadBtn" title="Create Channel">+</span>
      </div>
      
      <div id="threadList">
        <div class="channel-item active" id="chan-general-chat">
          <span class="prefix">#</span>
          <span>general-chat</span>
        </div>
      </div>

      <div class="sidebar-section" style="margin-top: 16px;">
        <span>Direct Messages</span>
        <span class="add-btn" id="openNewDmBtn" title="Start Direct Message">+</span>
      </div>
      <div id="dmList"></div>
    </div>

    <!-- Bottom Profile Bar -->
    <div class="user-profile-panel" id="myProfilePanel">
      <div class="user-info-wrapper">
        <div class="user-avatar-container">
          <div class="user-profile-avatar" id="myAvatarInitial">?</div>
          <div class="status-dot"></div>
        </div>
        <div class="user-names">
          <div class="user-display-name" id="myDisplayUsername">User</div>
          <div class="user-tag" id="myDisplayPronouns">Online</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Chat Area -->
  <div id="chat">
    <div class="chat-header">
      <div class="header-left">
        <span class="prefix" id="headerPrefix">#</span>
        <span id="headerTitle">general-chat</span>
      </div>
    </div>

    <div id="messages"></div>

    <div id="bottom">
      <div id="plusMenu" class="glass-popup hidden animate-pop">
        <button id="uploadOption" class="menu-option"><span>📁</span> Upload File</button>
        <button id="emojisOption" class="menu-option"><span>😊</span> Emoji Picker</button>
      </div>

      <input type="file" id="fileInput" class="hidden">
      <input type="file" id="pfpFileInput" accept="image/*" class="hidden">

      <div id="emojiPicker" class="glass-popup hidden animate-pop" style="bottom: 80px;">
        <div id="emojiGrid" class="emoji-grid"></div>
      </div>
      
      <!-- Reply Banner -->
      <div id="replyBanner" class="reply-banner hidden">
        <span>Replying to <b id="replyTargetName"></b></span>
        <span id="closeReplyBanner" class="reply-banner-close">✖</span>
      </div>

      <!-- Typing Indicator -->
      <div id="typingIndicator" class="typing-indicator hidden">
        <div class="typing-dots"><span></span><span></span><span></span></div>
        <span id="typingText"></span>
      </div>

      <div class="input-wrapper">
        <div id="plusBtn" class="plus-btn" title="Add">+</div>
        <input id="message" placeholder="Message #general-chat" autocomplete="off">
      </div>
    </div>
  </div>
</div>

<!-- PUBLIC / PRIVATE PROFILE POPOVER CARD -->
<div id="profilePopover" class="profile-popover hidden animate-pop">
  <div class="profile-banner-top">
    <div class="profile-avatar-large" id="popoverAvatar">
      <span id="popoverAvatarInitial">?</span>
      <div class="profile-avatar-overlay hidden" id="popoverAvatarOverlay">Change<br>Avatar</div>
    </div>
  </div>
  <div class="profile-body">
    <div class="profile-username-row">
      <div class="profile-username-text" id="popoverUsername">User</div>
      <input type="text" id="popoverPronounsInput" class="profile-pronouns-input" placeholder="+ Pronouns" maxlength="15">
    </div>
    
    <div class="profile-divider"></div>
    <div class="profile-section-title">About Me</div>
    <textarea id="popoverBioInput" class="profile-bio-textarea hidden" placeholder="Write something about yourself..."></textarea>
    <div id="popoverBioReadonly" class="profile-bio-readonly hidden"></div>
  </div>
</div>

<!-- CONTEXT MENU -->
<div id="msgContextMenu" class="msg-context-menu hidden">
  <button id="ctxReply" class="menu-option"><span>↩️</span> Reply</button>
  <button id="ctxEdit" class="menu-option"><span>✏️</span> Edit Message</button>
  <button id="ctxCopy" class="menu-option"><span>📋</span> Copy Text</button>
  <button id="ctxReact" class="menu-option"><span>😀</span> React</button>
  <div id="reactEmojiBar" class="emoji-grid hidden" style="background: #1e1f22; border-radius: 8px; margin-top: 4px;"></div>
</div>

<!-- MODALS -->
<div id="newDmModal" class="modal-overlay hidden">
  <div class="modal-box animate-pop">
    <h3>Direct Message</h3>
    <label style="font-size:12px; color:#b5bac1; text-transform:uppercase;">Select User</label>
    <input id="newDmUsernameInput" type="text" placeholder="Type to filter or enter username...">
    <div id="userSelectList" class="user-select-list"></div>
    <div class="modal-actions">
      <button id="confirmStartDmBtn">Start Conversation</button>
    </div>
  </div>
</div>

<div id="newThreadModal" class="modal-overlay hidden">
  <div class="modal-box animate-pop">
    <h3>Create Text Channel</h3>
    <label style="font-size:12px; color:#b5bac1; text-transform:uppercase;">Channel Name</label>
    <input id="newThreadInput" type="text" placeholder="e.g. announcements">
    <div class="modal-actions">
      <button id="confirmThreadBtn">Create Channel</button>
    </div>
  </div>
</div>

<script>
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyZLKF6PQ9vY6TuyLTr_McZkWnP3MRYhFiKSW9lnOm5StCVTDjBHA7ZKJPdD8UWMA/exec";
const EMOJIS = ["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","😉","😍","😘","😜","🤔","😎","😭","😡","👍","👎","🔥","💀"];

let username = "";
let userPassword = "";
let isRegisterMode = false;

let currentContext = { type: 'channel', id: 'general-chat' }; 
let activeDms = new Set();
let activeThreads = new Set(["general-chat"]); 
let cachedMessages = [];
let pendingLocalMessages = []; 
let renderedMessageIds = new Set();
let messageReactions = {}; 
let userMessageReactions = {}; 
let userProfiles = {}; 
let pollingInterval = null;

let currentThreadKeys = "";
let currentDmKeys = "";
let activeContextMsg = null; 
let activeReplyTarget = null;
let activeProfileUser = null;

let typingTimeout = null;
let lastTypingSentTime = 0;
let serverTypingMap = {};

const loginContainerEl = document.getElementById("login-container");
const appEl = document.getElementById("app");
const messagesEl = document.getElementById("messages");
const messageInput = document.getElementById("message");

const typingIndicator = document.getElementById("typingIndicator");
const typingText = document.getElementById("typingText");

const authBtn = document.getElementById("authBtn");
const authBtnText = document.getElementById("authBtnText");
const authToggleBtn = document.getElementById("authToggleBtn");
const authToggleLabel = document.getElementById("authToggleLabel");
const authTitle = document.getElementById("authTitle");

const plusBtn = document.getElementById("plusBtn");
const plusMenu = document.getElementById("plusMenu");
const uploadOption = document.getElementById("uploadOption");
const fileInput = document.getElementById("fileInput");
const pfpFileInput = document.getElementById("pfpFileInput");
const emojisOption = document.getElementById("emojisOption");
const emojiPicker = document.getElementById("emojiPicker");
const emojiGrid = document.getElementById("emojiGrid");

const msgContextMenu = document.getElementById("msgContextMenu");
const ctxReply = document.getElementById("ctxReply");
const ctxEdit = document.getElementById("ctxEdit");
const ctxCopy = document.getElementById("ctxCopy");
const ctxReact = document.getElementById("ctxReact");
const reactEmojiBar = document.getElementById("reactEmojiBar");

const replyBanner = document.getElementById("replyBanner");
const replyTargetName = document.getElementById("replyTargetName");
const closeReplyBanner = document.getElementById("closeReplyBanner");

const profilePopover = document.getElementById("profilePopover");
const popoverAvatar = document.getElementById("popoverAvatar");
const popoverAvatarInitial = document.getElementById("popoverAvatarInitial");
const popoverAvatarOverlay = document.getElementById("popoverAvatarOverlay");
const popoverUsername = document.getElementById("popoverUsername");
const popoverPronounsInput = document.getElementById("popoverPronounsInput");
const popoverBioInput = document.getElementById("popoverBioInput");
const popoverBioReadonly = document.getElementById("popoverBioReadonly");

/* INIT EMOJI ARSENALS */
EMOJIS.forEach(emoji => {
  const btn = document.createElement("button");
  btn.className = "emoji-item";
  btn.innerText = emoji;
  btn.onclick = () => {
    messageInput.value += emoji;
    messageInput.focus();
    emojiPicker.classList.add("hidden");
  };
  emojiGrid.appendChild(btn);

  const reactBtn = document.createElement("button");
  reactBtn.className = "emoji-item";
  reactBtn.innerText = emoji;
  reactBtn.onclick = (e) => {
    e.stopPropagation();
    if (activeContextMsg) {
      const rawId = activeContextMsg.id || activeContextMsg.localId;
      const msgId = `msg_${rawId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
      toggleReaction(msgId, emoji);
    }
    msgContextMenu.classList.add("hidden");
  };
  reactEmojiBar.appendChild(reactBtn);
});

/* MENU & INPUT POPUPS */
plusBtn.onclick = (e) => {
  e.stopPropagation();
  emojiPicker.classList.add("hidden");
  plusMenu.classList.toggle("hidden");
};

uploadOption.onclick = (e) => {
  e.stopPropagation();
  plusMenu.classList.add("hidden");
  fileInput.click();
};

fileInput.onchange = async () => {
  const file = fileInput.files[0];
  if (!file) return;

  const target_dm = getCurrentTargetDm();
  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    const localId = "pending_file_" + (crypto.randomUUID ? crypto.randomUUID() : Date.now());
    
    const localMsg = {
      localId: localId,
      username: username,
      message: `Uploading ${file.name}...`,
      target_dm: target_dm,
      reply_to: activeReplyTarget ? activeReplyTarget.id : "",
      created_at: new Date().toISOString()
    };
    pendingLocalMessages.push(localMsg);
    
    clearReplyState();
    renderMessages(true);

    try {
      const payload = {
        action: "upload", username, password: userPassword,
        fileName: file.name, fileType: file.type, fileData: base64Data,
        target_dm, reply_to: localMsg.reply_to, client_id: localId
      };
      const res = await fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(payload) });
      const result = await res.json();
      if (result.id) localMsg.id = result.id;
      fetchMessages();
    } catch (err) {
      alert("Failed to upload file.");
    } finally {
      fileInput.value = "";
    }
  };
  reader.readAsDataURL(file);
};

emojisOption.onclick = (e) => {
  e.stopPropagation();
  plusMenu.classList.add("hidden");
  emojiPicker.classList.remove("hidden");
};

document.addEventListener("click", () => {
  plusMenu.classList.add("hidden");
  emojiPicker.classList.add("hidden");
  msgContextMenu.classList.add("hidden");
  profilePopover.classList.add("hidden");
});

plusMenu.onclick = (e) => e.stopPropagation();
emojiPicker.onclick = (e) => e.stopPropagation();
msgContextMenu.onclick = (e) => e.stopPropagation();
profilePopover.onclick = (e) => e.stopPropagation();

/* AUTHENTICATION SETUP */
authToggleBtn.onclick = () => {
  isRegisterMode = !isRegisterMode;
  authTitle.textContent = isRegisterMode ? "Create an account" : "Welcome back!";
  authBtnText.textContent = isRegisterMode ? "Continue" : "Log In";
  authToggleLabel.textContent = isRegisterMode ? "Already have an account?" : "Need an account?";
  authToggleBtn.textContent = isRegisterMode ? "Register" : "Log In";
};

authBtn.onclick = async () => {
  const user = document.getElementById("usernameInput").value.trim();
  const pass = document.getElementById("passwordInput").value.trim();
  if (!user || !pass) return alert("Please enter username and password.");

  authBtn.classList.add("processing-state");
  authBtnText.textContent = "Connecting...";
  username = user;
  userPassword = pass;

  try {
    const params = new URLSearchParams({ action: isRegisterMode ? "register" : "login", username, password: userPassword });
    const res = await fetch(`${SCRIPT_URL}?${params.toString()}`);
    const result = await res.json();

    if (result.error) {
      alert("Auth Error: " + result.error);
      authBtn.classList.remove("processing-state");
      authBtnText.textContent = isRegisterMode ? "Continue" : "Log In";
      return;
    }
  } catch (err) {
    console.warn("Auth network log:", err);
  }

  document.getElementById("myDisplayUsername").textContent = username;
  document.getElementById("myAvatarInitial").textContent = username.charAt(0).toUpperCase();

  loginContainerEl.classList.add("hidden");
  appEl.classList.remove("hidden");
  appEl.classList.add("animate-pop");

  fetchMessages();
  if (!pollingInterval) {
    pollingInterval = setInterval(fetchMessages, 2000);
  }
};

/* PROFILE POPOVER LOGIC */
document.getElementById("myProfilePanel").onclick = (e) => {
  e.stopPropagation();
  openProfileCard(username);
};

function openProfileCard(targetUser) {
  activeProfileUser = targetUser;
  const isMe = targetUser.toLowerCase() === username.toLowerCase();
  const profile = userProfiles[targetUser.toLowerCase()] || { username: targetUser, pronouns: "", bio: "", avatar_url: "" };

  popoverUsername.textContent = profile.username || targetUser;

  if (profile.avatar_url) {
    popoverAvatar.style.backgroundImage = `url("${profile.avatar_url}")`;
    popoverAvatarInitial.textContent = "";
  } else {
    popoverAvatar.style.backgroundImage = "none";
    popoverAvatarInitial.textContent = (profile.username || targetUser).charAt(0).toUpperCase();
  }

  if (isMe) {
    popoverAvatarOverlay.classList.remove("hidden");
    popoverAvatar.onclick = () => pfpFileInput.click();

    popoverPronounsInput.value = profile.pronouns || "";
    popoverPronounsInput.readOnly = false;
    popoverPronounsInput.placeholder = "+ Pronouns";

    popoverBioInput.value = profile.bio || "";
    popoverBioInput.classList.remove("hidden");
    popoverBioReadonly.classList.add("hidden");
  } else {
    popoverAvatarOverlay.classList.add("hidden");
    popoverAvatar.onclick = null;

    popoverPronounsInput.value = profile.pronouns || "";
    popoverPronounsInput.readOnly = true;
    popoverPronounsInput.placeholder = "";

    popoverBioReadonly.textContent = profile.bio || "No bio provided.";
    popoverBioReadonly.classList.remove("hidden");
    popoverBioInput.classList.add("hidden");
  }

  profilePopover.classList.remove("hidden");
}

/* AVATAR UPLOAD HANDLER */
pfpFileInput.onchange = () => {
  const file = pfpFileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Img = e.target.result;
    
    if (!userProfiles[username.toLowerCase()]) userProfiles[username.toLowerCase()] = {};
    userProfiles[username.toLowerCase()].avatar_url = base64Img;

    updateMyProfileUI();
    saveProfileChanges({ avatar_url: base64Img });
  };
  reader.readAsDataURL(file);
};

popoverPronounsInput.onchange = () => {
  if (activeProfileUser && activeProfileUser.toLowerCase() === username.toLowerCase()) {
    const val = popoverPronounsInput.value.trim();
    userProfiles[username.toLowerCase()].pronouns = val;
    updateMyProfileUI();
    saveProfileChanges({ pronouns: val });
  }
};

popoverBioInput.onchange = () => {
  if (activeProfileUser && activeProfileUser.toLowerCase() === username.toLowerCase()) {
    const val = popoverBioInput.value.trim();
    userProfiles[username.toLowerCase()].bio = val;
    saveProfileChanges({ bio: val });
  }
};

async function saveProfileChanges(changes) {
  try {
    const payload = {
      action: "update_profile",
      username: username,
      password: userPassword,
      ...changes
    };
    await fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(payload) });
    fetchMessages();
  } catch (err) {
    console.error("Failed to update profile", err);
  }
}

function updateMyProfileUI() {
  const myProfile = userProfiles[username.toLowerCase()];
  if (!myProfile) return;

  const myAvatarEl = document.getElementById("myAvatarInitial");
  if (myProfile.avatar_url) {
    myAvatarEl.style.backgroundImage = `url("${myProfile.avatar_url}")`;
    myAvatarEl.textContent = "";
  } else {
    myAvatarEl.style.backgroundImage = "none";
    myAvatarEl.textContent = username.charAt(0).toUpperCase();
  }

  document.getElementById("myDisplayPronouns").textContent = myProfile.pronouns || "Online";
}

/* HELPERS */
function getDmRoomId(userA, userB) {
  return [userA.trim().toLowerCase(), userB.trim().toLowerCase()].sort().join(":");
}

function getCurrentTargetDm() {
  if (currentContext.type === 'dm') return getDmRoomId(username, currentContext.id);
  if (currentContext.type === 'channel' && currentContext.id !== 'general-chat') return `channel:${currentContext.id}`;
  return "channel:general-chat";
}

function matchesContext(msg) {
  const target = msg.target_dm || "";
  if (currentContext.type === 'channel') {
    if (currentContext.id === 'general-chat') return target === "" || target === "channel:general-chat";
    return target === `channel:${currentContext.id}`;
  } else {
    if (!target.includes(":")) return false; 
    return target.toLowerCase() === getDmRoomId(username, currentContext.id);
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function formatMessageContent(msgText) {
  if (!msgText) return "";
  const imageMatch = msgText.match(/^\[IMAGE:(.+)\|(.+)\]$/);
  if (imageMatch) return `<a href="${escapeHtml(imageMatch[1])}" target="_blank"><img src="${escapeHtml(imageMatch[1])}" alt="${escapeHtml(imageMatch[2])}" class="chat-image"></a>`;

  const fileMatch = msgText.match(/^\[FILE:(.+)\|(.+)\]$/);
  if (fileMatch) return `<a href="${escapeHtml(fileMatch[1])}" target="_blank" class="chat-file-box">📄 Download ${escapeHtml(fileMatch[2])}</a>`;

  return escapeHtml(msgText);
}

/* CLICK & REACTION DISPATCHERS */
function attachMessageClickHandlers(div, msg) {
  div.onclick = (e) => {
    e.stopPropagation();
    activeContextMsg = msg;
    reactEmojiBar.classList.add("hidden");

    const isOwnMessage = msg.username && msg.username.toLowerCase() === username.toLowerCase();
    const hasRealId = msg.id && !msg.id.startsWith("pending_");

    if (isOwnMessage && hasRealId) ctxEdit.classList.remove("hidden");
    else ctxEdit.classList.add("hidden");

    msgContextMenu.style.left = `${Math.min(e.clientX, window.innerWidth - 180)}px`;
    msgContextMenu.style.top = `${Math.min(e.clientY, window.innerHeight - 150)}px`;
    msgContextMenu.classList.remove("hidden");
  };
}

ctxReply.onclick = () => {
  activeReplyTarget = activeContextMsg;
  replyTargetName.textContent = activeReplyTarget.username;
  replyBanner.classList.remove("hidden");
  msgContextMenu.classList.add("hidden");
  messageInput.focus();
};

closeReplyBanner.onclick = () => clearReplyState();
function clearReplyState() {
  activeReplyTarget = null;
  replyBanner.classList.add("hidden");
}

ctxCopy.onclick = () => {
  if (activeContextMsg && activeContextMsg.message) navigator.clipboard.writeText(activeContextMsg.message);
  msgContextMenu.classList.add("hidden");
};

ctxEdit.onclick = async () => {
  msgContextMenu.classList.add("hidden");
  if (!activeContextMsg || !activeContextMsg.id || activeContextMsg.id.startsWith("pending_")) return;

  const currentText = activeContextMsg.message || "";
  const newText = prompt("Edit your message:", currentText);

  if (newText !== null && newText.trim() !== "" && newText !== currentText) {
    try {
      const payload = { action: "edit", username, password: userPassword, message_id: activeContextMsg.id, new_message: newText.trim() };
      await fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(payload) });
      fetchMessages();
    } catch (err) {}
  }
};

ctxReact.onclick = () => reactEmojiBar.classList.toggle("hidden");

async function toggleReaction(msgId, emoji) {
  const rawMsgId = msgId.startsWith("msg_") ? msgId.substring(4) : msgId;

  if (!messageReactions[msgId]) messageReactions[msgId] = {};
  if (!userMessageReactions[msgId]) userMessageReactions[msgId] = {};

  if (userMessageReactions[msgId][emoji]) {
    userMessageReactions[msgId][emoji] = false;
    messageReactions[msgId][emoji] = Math.max(0, (messageReactions[msgId][emoji] || 1) - 1);
    if (messageReactions[msgId][emoji] === 0) delete messageReactions[msgId][emoji];
  } else {
    userMessageReactions[msgId][emoji] = true;
    messageReactions[msgId][emoji] = (messageReactions[msgId][emoji] || 0) + 1;
  }
  
  renderReactions(msgId);

  if (!rawMsgId.startsWith("pending_")) {
    try {
      const payload = { action: "react", username, password: userPassword, message_id: rawMsgId, emoji };
      await fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(payload) });
      fetchMessages();
    } catch (err) {}
  }
}

function renderReactions(msgId) {
  const reactionsDiv = document.getElementById(`reactions_${msgId}`);
  if (!reactionsDiv) return;

  reactionsDiv.innerHTML = "";
  if (!messageReactions[msgId]) return;

  Object.entries(messageReactions[msgId]).forEach(([emoji, count]) => {
    if (count <= 0) return;
    const badge = document.createElement("span");
    const isReactedByMe = userMessageReactions[msgId] && userMessageReactions[msgId][emoji];
    badge.className = `reaction-badge ${isReactedByMe ? 'reacted' : ''}`;
    badge.innerHTML = `${emoji} <span>${count}</span>`;
    badge.onclick = (e) => {
      e.stopPropagation();
      toggleReaction(msgId, emoji);
    };
    reactionsDiv.appendChild(badge);
  });
}

function renderTypingIndicator() {
  const roomKey = getCurrentTargetDm();
  const typingUsersInRoom = serverTypingMap[roomKey] || [];
  const otherTypingUsers = typingUsersInRoom.filter(u => u.toLowerCase() !== username.toLowerCase());

  if (otherTypingUsers.length === 0) {
    typingIndicator.classList.add("hidden");
    return;
  }

  let text = "";
  if (otherTypingUsers.length === 1) text = `<b>${escapeHtml(otherTypingUsers[0])}</b> is typing...`;
  else if (otherTypingUsers.length === 2) text = `<b>${escapeHtml(otherTypingUsers[0])}</b> and <b>${escapeHtml(otherTypingUsers[1])}</b> are typing...`;
  else text = "Several people are typing...";

  typingText.innerHTML = text;
  typingIndicator.classList.remove("hidden");
}

function sendTypingSignal(isTyping) {
  if (!username) return;
  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ action: "typing", username, target_dm: getCurrentTargetDm(), is_typing: isTyping })
  }).catch(() => {});
}

/* RENDER MESSAGES & MERGE REACTION STATES PREVENTING FLICKER */
function renderMessages(forceScroll = false) {
  let wasAtBottom = forceScroll || ((messagesEl.scrollHeight - messagesEl.scrollTop) <= messagesEl.clientHeight + 50);

  cachedMessages.forEach((msg) => {
    const target = msg.target_dm || "";
    if (target.startsWith("channel:") && target !== "channel:general-chat") {
      activeThreads.add(target.replace("channel:", ""));
    } else if (target && target.includes(":") && !target.startsWith("channel:")) {
      const parts = target.split(":");
      const myLower = username.toLowerCase();
      if (parts[0] && parts[0].toLowerCase() === myLower) activeDms.add(parts[1]);
      if (parts[1] && parts[1].toLowerCase() === myLower) activeDms.add(parts[0]);
    }

    if (msg.id && !msg.id.startsWith("pending_")) {
      const rawId = msg.id;
      const msgId = `msg_${rawId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
      
      const serverReactions = {};
      const serverUserReactions = {};

      if (msg.reactions) {
        Object.entries(msg.reactions).forEach(([emoji, users]) => {
          serverReactions[emoji] = users.length;
          if (Array.isArray(users) && users.includes(username)) {
            serverUserReactions[emoji] = true;
          }
        });
      }

      messageReactions[msgId] = serverReactions;
      userMessageReactions[msgId] = serverUserReactions;
    }
  });

  let allMessages = [...cachedMessages];
  pendingLocalMessages.forEach(pm => {
    if (!allMessages.find(am => am.id === pm.localId || am.id === pm.id)) {
      allMessages.push({...pm, id: pm.localId});
    }
  });

  allMessages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  allMessages.forEach((msg) => {
    if (!matchesContext(msg)) return;

    const rawId = msg.id || msg.localId || `${msg.username}_${msg.created_at}`;
    const msgId = `msg_${rawId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;

    let div = document.getElementById(msgId);
    
    if (!div) {
      div = document.createElement("div");
      div.id = msgId;
      div.classList.add("message");

      if (!renderedMessageIds.has(msgId)) {
        div.classList.add("animate-pop");
        renderedMessageIds.add(msgId);
      }
      messagesEl.appendChild(div);
    }

    attachMessageClickHandlers(div, msg);

    const msgUser = msg.username || "?";
    const profile = userProfiles[msgUser.toLowerCase()] || {};
    const avatarStyle = profile.avatar_url ? `background-image: url('${profile.avatar_url}');` : '';
    const initial = msgUser.charAt(0).toUpperCase();

    const time = msg.created_at ? new Date(msg.created_at).toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" }) : "";
    const editedLabel = msg.is_edited ? `<span class="edited-tag">(edited)</span>` : "";

    let replyHtml = "";
    if (msg.reply_to) {
      const parentMsg = cachedMessages.find(m => m.id === msg.reply_to);
      if (parentMsg) {
        const parentMsgId = `msg_${parentMsg.id.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
        replyHtml = `
          <div class="reply-reference" onclick="const pEl = document.getElementById('${parentMsgId}'); if(pEl) pEl.scrollIntoView({behavior: 'smooth', block: 'center'});">
            <b>@${escapeHtml(parentMsg.username)}</b>: ${escapeHtml(parentMsg.message).substring(0, 40)}
          </div>
        `;
      }
    }

    div.innerHTML = `
      <div class="avatar" style="${avatarStyle} ${msg.reply_to ? 'top: 24px;' : ''}" onclick="event.stopPropagation(); openProfileCard('${escapeHtml(msgUser)}');">${profile.avatar_url ? '' : escapeHtml(initial)}</div>
      <div class="message-content">
        ${replyHtml}
        <div class="message-header">
          <b onclick="event.stopPropagation(); openProfileCard('${escapeHtml(msgUser)}');">${escapeHtml(msgUser)}</b>
          <span class="time">${escapeHtml(time)}</span>
        </div>
        <span class="text">${formatMessageContent(msg.message)}${editedLabel}</span>
        <div id="reactions_${msgId}" class="reactions-container"></div>
      </div>
    `;

    renderReactions(msgId);
  });

  renderSidebars();
  renderTypingIndicator();

  if (wasAtBottom) messagesEl.scrollTop = messagesEl.scrollHeight;
}

/* FETCH MESSAGES & PROFILES */
async function fetchMessages() {
  try {
    const res = await fetch(SCRIPT_URL);
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    if (data.error) return;

    cachedMessages = Array.isArray(data.messages) ? data.messages : [];
    serverTypingMap = data.typing_users || {};
    if (data.profiles) {
      userProfiles = data.profiles;
      updateMyProfileUI();
    }
    
    renderMessages();
  } catch (err) {}
}

/* SEND MESSAGE */
async function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;

  const target_dm = getCurrentTargetDm();

  messageInput.value = "";
  const currentReplyId = activeReplyTarget ? activeReplyTarget.id : "";
  clearReplyState();

  if (typingTimeout) clearTimeout(typingTimeout);
  sendTypingSignal(false);

  const localId = "pending_" + (crypto.randomUUID ? crypto.randomUUID() : (Date.now() + "_" + Math.random().toString(36).substr(2, 5)));

  const localMsg = {
    localId, username, message: text, target_dm, reply_to: currentReplyId, created_at: new Date().toISOString()
  };
  pendingLocalMessages.push(localMsg);
  renderMessages(true);

  try {
    const params = new URLSearchParams({
      action: "send", username, password: userPassword, message: text, target_dm, reply_to: currentReplyId, client_id: localId
    });

    fetch(`${SCRIPT_URL}?${params.toString()}`).then(async res => {
      const result = await res.json();
      if (result.id) localMsg.id = result.id;
      fetchMessages();
    });
  } catch (err) {}
}

/* INPUT TYPING EVENTS */
messageInput.addEventListener("input", () => {
  const now = Date.now();
  if (now - lastTypingSentTime > 2500) {
    lastTypingSentTime = now;
    sendTypingSignal(true);
  }
  if (typingTimeout) clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => sendTypingSignal(false), 3000);
});

messageInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.repeat) {
    e.preventDefault();
    sendMessage();
  }
});

/* SIDEBAR RENDERER */
function renderSidebars() {
  const newThreadKeys = Array.from(activeThreads).join(",") + ":" + (currentContext.type === 'channel' ? currentContext.id : '');
  const newDmKeys = Array.from(activeDms).join(",") + ":" + (currentContext.type === 'dm' ? currentContext.id : '');

  if (newThreadKeys !== currentThreadKeys) {
    currentThreadKeys = newThreadKeys;
    const threadListEl = document.getElementById("threadList");
    threadListEl.innerHTML = "";
    activeThreads.forEach(thread => {
      const item = document.createElement("div");
      item.className = "channel-item";
      if (currentContext.type === 'channel' && currentContext.id === thread) item.classList.add("active");
      item.innerHTML = `<span class="prefix">#</span><span>${escapeHtml(thread)}</span>`;
      item.onclick = () => switchContext('channel', thread);
      threadListEl.appendChild(item);
    });
  }

  if (newDmKeys !== currentDmKeys) {
    currentDmKeys = newDmKeys;
    const dmListEl = document.getElementById("dmList");
    dmListEl.innerHTML = "";
    activeDms.forEach(otherUser => {
      const item = document.createElement("div");
      item.className = "channel-item";
      if (currentContext.type === 'dm' && currentContext.id.toLowerCase() === otherUser.toLowerCase()) item.classList.add("active");

      const profile = userProfiles[otherUser.toLowerCase()] || {};
      const avatarStyle = profile.avatar_url ? `background-image: url('${profile.avatar_url}');` : '';

      item.innerHTML = `<div class="dm-user-avatar" style="${avatarStyle}">${profile.avatar_url ? '' : escapeHtml(otherUser.charAt(0).toUpperCase())}</div><span>${escapeHtml(otherUser)}</span>`;
      item.onclick = () => switchContext('dm', otherUser);
      dmListEl.appendChild(item);
    });
  }
}

function switchContext(type, id) {
  currentContext = { type, id };
  if (type === 'channel') {
    document.getElementById("headerPrefix").textContent = "#";
    document.getElementById("headerTitle").textContent = id;
    messageInput.placeholder = `Message #${id}`;
  } else {
    document.getElementById("headerPrefix").textContent = "@";
    document.getElementById("headerTitle").textContent = id;
    messageInput.placeholder = `Message @${id}`;
  }
  
  clearReplyState();
  messagesEl.innerHTML = ""; 
  renderedMessageIds.clear(); 
  currentThreadKeys = "";
  currentDmKeys = "";
  renderMessages(true);
}

function getKnownUsernames() {
  const users = new Set();
  cachedMessages.forEach(msg => {
    if (msg.username) users.add(msg.username);
  });
  return Array.from(users).filter(u => u.toLowerCase() !== username.toLowerCase());
}

function populateUserSelectList() {
  const listEl = document.getElementById("userSelectList");
  const filter = document.getElementById("newDmUsernameInput").value.trim().toLowerCase();
  listEl.innerHTML = "";

  const knownUsers = getKnownUsernames().filter(u => u.toLowerCase().includes(filter));
  if (knownUsers.length === 0) {
    listEl.innerHTML = `<div style="color: #949ba4; font-size: 13px; padding: 12px; text-align: center;">No users found. You can still enter a username above.</div>`;
    return;
  }

  knownUsers.forEach(u => {
    const item = document.createElement("div");
    item.className = "user-select-item";
    item.innerHTML = `<span>${escapeHtml(u)}</span>`;
    item.onclick = () => startDmWithUser(u);
    listEl.appendChild(item);
  });
}

function startDmWithUser(targetUser) {
  if (targetUser && targetUser.toLowerCase() !== username.toLowerCase()) {
    activeDms.add(targetUser);
    switchContext('dm', targetUser);
    document.getElementById("newDmUsernameInput").value = "";
    newDmModal.classList.add("hidden");
  }
}

const newDmModal = document.getElementById("newDmModal");
const newThreadModal = document.getElementById("newThreadModal");

document.getElementById("openNewDmBtn").onclick = () => {
  document.getElementById("newDmUsernameInput").value = "";
  populateUserSelectList();
  newDmModal.classList.remove("hidden");
};

document.getElementById("newDmUsernameInput").oninput = () => populateUserSelectList();
document.getElementById("openNewThreadBtn").onclick = () => newThreadModal.classList.remove("hidden");

document.getElementById("confirmStartDmBtn").onclick = () => {
  startDmWithUser(document.getElementById("newDmUsernameInput").value.trim());
};

document.getElementById("confirmThreadBtn").onclick = () => {
  let threadName = document.getElementById("newThreadInput").value.trim().toLowerCase().replace(/\s+/g, '-');
  if (threadName) {
    activeThreads.add(threadName);
    switchContext('channel', threadName);
    document.getElementById("newThreadInput").value = "";
    newThreadModal.classList.add("hidden");
  }
};

window.onclick = (e) => {
  if (e.target === newDmModal) newDmModal.classList.add("hidden");
  if (e.target === newThreadModal) newThreadModal.classList.add("hidden");
};
</script>
</body>
</html>

