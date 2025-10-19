const messageModel = require('../models/messageModel');

// GET / - Display all messages on the index page
exports.getIndex = async (req, res) => {
    try {
        const messages = await messageModel.getAllMessages();
        res.render("index", { 
            title: "Mini Messageboard", 
            messages: messages 
        });
    } catch (error) {
        console.error('Error loading messages:', error);
        res.status(500).render("error", {
            title: "Error",
            message: "Failed to load messages",
            error: { status: 500 }
        });
    }
};

// GET /message/:id - Display details for a single message
exports.getMessageDetail = async (req, res) => {
    try {
        const messageId = req.params.id;
        const message = await messageModel.getMessageById(messageId);
        
        if (message) {
            res.render("message", { 
                title: "Message Details", 
                message: message,
                messageId: messageId
            });
        } else {
            res.status(404).render("error", {
                title: "Error",
                message: "Message not found",
                error: { status: 404 }
            });
        }
    } catch (error) {
        console.error('Error loading message:', error);
        res.status(500).render("error", {
            title: "Error",
            message: "Failed to load message details",
            error: { status: 500 }
        });
    }
};