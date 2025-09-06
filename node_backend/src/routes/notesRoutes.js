const express = require("express");
const router = express.Router();

const {
  addNotes,
  getAllTags,
  getAllNotes,
  deleteNote,
  updateNote,
  getNote,
  searchNote,
} = require("../controllers/notesController");

router.route("/:noteModule/addNote").post(addNotes);

router.route("/:noteModule/getAllTags").get(getAllTags);

router.route("/:noteModule/getAllNotes").get(getAllNotes);

router.route("/:noteModule/deleteNote/:id").delete(deleteNote);

router.route("/:noteModule/updateNote").post(updateNote);

router.route("/:noteModule/getNote/:id").get(getNote);

router.route("/:noteModule/search").get(searchNote);

module.exports = router;
