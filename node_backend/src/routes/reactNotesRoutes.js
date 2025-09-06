const express = require("express");
const router = express.Router();

const {
  addReactNotes,
  getAllTags,
  getAllNotes,
  deleteNote,
  updateNote,
  getNote,
  searchNote,
} = require("../controllers/reactNotesController");

router.route("/addNote").post(addReactNotes);

router.route("/getAllTags").get(getAllTags);

router.route("/getAllNotes").get(getAllNotes);

router.route("/deleteNote/:id").delete(deleteNote);

router.route("/updateNote").post(updateNote);

router.route("/getNote/:id").get(getNote);

router.route("/search").get(searchNote);

module.exports = router;
