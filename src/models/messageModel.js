// Message model with PostgreSQL database integration
// src/models/messageModel.js

const db = require('./db/queries');

// Get all messages
exports.getAllMessages = async () => {
    try {
        return await db.getAllMessages();
    } catch (error) {
        console.error('Error getting all messages:', error);
        throw error;
    }
};

// Get a single message by ID
exports.getMessageById = async (id) => {
    try {
        return await db.getMessageById(id);
    } catch (error) {
        console.error('Error getting message by ID:', error);
        throw error;
    }
};

// Create a new message
exports.createMessage = async (text, user) => {
    try {
        return await db.createMessage(user, text);
    } catch (error) {
        console.error('Error creating message:', error);
        throw error;
    }
};

// Get total message count
exports.getMessageCount = async () => {
    try {
        return await db.getMessageCount();
    } catch (error) {
        console.error('Error getting message count:', error);
        throw error;
    }
};

// Delete a message
exports.deleteMessage = async (id) => {
    try {
        return await db.deleteMessage(id);
    } catch (error) {
        console.error('Error deleting message:', error);
        throw error;
    }
};