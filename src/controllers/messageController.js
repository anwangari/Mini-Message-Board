const messageModel = require('../models/messageModel');

// GET /new - Show the form to create a new message
exports.showNewMessageForm = (req, res) => {
    res.render("form", { 
        title: "New Message" 
    });
};

// POST /new - Handle new message submission
exports.createMessage = (req, res) => {
    const { messageText, messageUser } = req.body;
    
    // Validate input
    if (!messageText || !messageUser) {
        return res.status(400).render("form", {
            title: "New Message",
            error: "Both name and message are required"
        });
    }
    
    // Create the message using the model
    messageModel.createMessage(messageText, messageUser);
    
    // Redirect to home page
    res.redirect("/");
};