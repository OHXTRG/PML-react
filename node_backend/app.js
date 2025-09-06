const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
// middle ware
const { errorHandler } = require("./src/middlewares/errorHandler");

// routes
const reactNotesRouter = require("./src/routes/reactNotesRoutes");
const noteModuleRouter = require("./src/routes/noteModuleRoutes");
const notesRouter = require("./src/routes/notesRoutes");

// middleware
///// capture all request
app.use((req, res, next) => {
  console.log(`${req.method} / ${req.host} -- ${req.url}`);
  next();
});
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
app.use(express.static(path.resolve(__dirname, "client", "build")));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/test", (req, res) => {
  console.log(mongoose.models);
  res.json("working");
});

// routes
app.use("/api/react", reactNotesRouter);
app.use("/api/notes", notesRouter);
app.use("/api", noteModuleRouter);

// error middle ware
app.use(errorHandler);

app.get("*client", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// routes

module.exports = app;
