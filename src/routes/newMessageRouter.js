const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

// Route definitions - delegate to controller
messageRouter.get("/", messageController.showNewMessageForm);
messageRouter.post("/", messageController.createMessage);

module.exports = messageRouter;