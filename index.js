/**
 * WeChat Message Skill
 * Send and manage WeChat messages via wacli CLI
 */

const { execSync } = require('child_process');

// Check if wacli is available
function checkWacli() {
  try {
    execSync('which wacli', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Send a message to a contact or group
async function sendMessage(contactName, message) {
  if (!checkWacli()) {
    throw new Error('wacli is not installed. Please install it first: npm install -g wacli');
  }

  try {
    // Escape special characters in message
    const escapedMessage = message.replace(/"/g, '\\"');
    const command = `wacli send "${contactName}" "${escapedMessage}"`;
    const result = execSync(command, { encoding: 'utf-8', timeout: 30000 });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Search chat history
async function searchMessages(keyword, limit = 20) {
  if (!checkWacli()) {
    throw new Error('wacli is not installed. Please install it first: npm install -g wacli');
  }

  try {
    const command = `wacli search "${keyword}" --limit ${limit}`;
    const result = execSync(command, { encoding: 'utf-8', timeout: 30000 });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// List recent chats
async function listChats(limit = 10) {
  if (!checkWacli()) {
    throw new Error('wacli is not installed. Please install it first: npm install -g wacli');
  }

  try {
    const command = `wacli chats --limit ${limit}`;
    const result = execSync(command, { encoding: 'utf-8', timeout: 30000 });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Sync WeChat data
async function syncData() {
  if (!checkWacli()) {
    throw new Error('wacli is not installed. Please install it first: npm install -g wacli');
  }

  try {
    const command = 'wacli sync';
    const result = execSync(command, { encoding: 'utf-8', timeout: 120000 });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = {
  sendMessage,
  searchMessages,
  listChats,
  syncData,
  checkWacli
};
