require("dotenv").config();
const path = require("node:path");
const express = require('express');
const app = express();

// Import Routers
const indexRouter = require("./src/routes/indexRouter");
const messageRouter = require("./src/routes/newMessageRouter");

const PORT = process.env.PORT;

// Set up EJS as the view engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "src"))); // Serve static files (CSS)
app.use(express.urlencoded({ extended: true })); // Parse form data

// Routes
app.use("/", indexRouter);
app.use("/new", messageRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Message board app listening on PORT ${PORT}`)
});