const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

// Route definitions - delegate to controller
indexRouter.get("/", indexController.getIndex);
indexRouter.get("/message/:id", indexController.getMessageDetail);

module.exports = indexRouter;