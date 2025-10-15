const path = require("node:path");
const express = require('express');
const app = express();
const indexRouter = require("./src/routes/indexRouter");
const messageRouter = require("./src/routes/newMessageRoute");

const PORT = 3000;

app.use("/", indexRouter);
app.use("/new", messageRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
});
