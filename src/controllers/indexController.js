const messageModel = require('../models/messageModel');

// GET / - Display all messages on the index page
exports.getIndex = (req, res) => {
    const messages = messageModel.getAllMessages();
    res.render("index", { 
        title: "Mini Messageboard", 
        messages: messages 
    });
};

// GET /message/:id - Display details for a single message
exports.getMessageDetail = (req, res) => {
    const messageId = req.params.id;
    const message = messageModel.getMessageById(messageId);
    
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
};