require("dotenv").config();
const path = require("node:path");
const express = require('express');
const app = express();
const indexRouter = require("./src/routes/indexRouter");
const messageRouter = require("./src/routes/newMessageRouter");

const PORT = process.env.PORT;

// Set up EJS as the view engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "src")));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(PORT, () => {
  console.log(`Message board app listening on PORT ${PORT}`)
});