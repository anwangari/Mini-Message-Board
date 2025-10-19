// Database query functions
// src/models/db/queries.js

const pool = require('./pool');

// Get all messages from the database
async function getAllMessages() {
  const { rows } = await pool.query(
    'SELECT * FROM messages ORDER BY timestamp DESC'
  );
  return rows;
}

// Get a single message by ID
async function getMessageById(id) {
  const { rows } = await pool.query(
    'SELECT * FROM messages WHERE message_id = $1',
    [id]
  );
  return rows[0];
}

// Create a new message
async function createMessage(user, text) {
  const { rows } = await pool.query(
    'INSERT INTO messages ("user", text, timestamp) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *',
    [user, text]
  );
  return rows[0];
}

// Get total message count
async function getMessageCount() {
  const { rows } = await pool.query(
    'SELECT COUNT(*) FROM messages'
  );
  return parseInt(rows[0].count);
}

// Delete a message (bonus feature)
async function deleteMessage(id) {
  const { rowCount } = await pool.query(
    'DELETE FROM messages WHERE message_id = $1',
    [id]
  );
  return rowCount > 0;
}

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  getMessageCount,
  deleteMessage
};