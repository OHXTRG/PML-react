const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

// middle ware
const { errorHandler } = require("./src/middlewares/errorHandler");

// routes
const reactNotesRouter = require("./src/routes/reactNotesRoutes");

// middleware
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
app.use(express.static(path.resolve(__dirname, "client")));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/test", (req, res) => {
  res.json("working");
});

// routes
app.use("/api", reactNotesRouter);

// error middle ware
app.use(errorHandler);

app.get("*client", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// routes

module.exports = app;
