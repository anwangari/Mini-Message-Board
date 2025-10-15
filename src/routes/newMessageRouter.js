const { Router } = require("express");
const messageRouter = Router();

// GET route to display the new message form
messageRouter.get("/", (req, res) => {
  res.render("form", { title: "New Message" });
});

// POST route to handle new message submission
messageRouter.post("/", (req, res) => {
  const { messages } = require("./indexRouter");
  const { messageText, messageUser } = req.body;
  
  messages.push({ 
    text: messageText, 
    user: messageUser, 
    added: new Date() 
  });
  
  res.redirect("/");
});

module.exports = messageRouter;