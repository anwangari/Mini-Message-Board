const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("Hello Home Page");
  });


module.exports = indexRouter;