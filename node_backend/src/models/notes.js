const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Notes = mongoose.model("notes", NoteSchema);

module.exports = Notes;
