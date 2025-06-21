const mongoose = require("mongoose");

const ReactNotesSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  note: {
    type: String,
    require: true,
  },
  impLinks: {
    type: [],
    require: false,
  },
  tags: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "reactNotesTags",
    require: true,
  },
});

const ReactNotes = mongoose.model("reactNotes", ReactNotesSchema);

module.exports = ReactNotes;
