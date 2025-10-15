const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

// GET route for index page
indexRouter.get("/", (req, res) => {
  res.render("index", { 
    title: "Mini Messageboard", 
    messages: messages 
  });
});

module.exports = { router: indexRouter, messages };

// POST route to handle new message submission
indexRouter.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ 
    text: messageText, 
    user: messageUser, 
    added: new Date() 
  });
  res.redirect("/");
});

// GET route for individual message details
indexRouter.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages[messageId];
  
  if (message) {
    res.render("message", { 
      title: "Message Details", 
      message: message,
      messageId: messageId
    });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = indexRouter;