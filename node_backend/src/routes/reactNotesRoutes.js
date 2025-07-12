const express = require("express");
const router = express.Router();

const {
  addReactNotes,
  getAllTags,
  getAllNotes,
} = require("../controllers/reactNotesController");

router.route("/addReactNotes").post(addReactNotes);

router.route("/getAllTags").get(getAllTags);

router.route("/getAllReactNotes").get(getAllNotes);

module.exports = router;
