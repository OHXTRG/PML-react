const express = require("express");
const router = express.Router();

const {
  addNoteModule,
  getAllNoteModule,
  deleteNoteModule,
} = require("../controllers/noteModuleController");

router.route("/add-note-module").post(addNoteModule);
router.route("/get-all-note-module").get(getAllNoteModule);
router.route(`/delete-note-module/:noteModule`).delete(deleteNoteModule);

module.exports = router;
