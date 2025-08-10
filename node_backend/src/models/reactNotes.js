const mongoose = require("mongoose");

const ReactNotesSchema = mongoose.Schema(
  {
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
      type: [String],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const ReactNotes = mongoose.model("reactNotes", ReactNotesSchema);

module.exports = ReactNotes;
