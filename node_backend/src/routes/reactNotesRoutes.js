const express = require("express");
const router = express.Router();

const { addReactNotes } = require("../controllers/reactNotesController");

router.route("/addReactNotes").post(addReactNotes);

module.exports = router;
