const mongoose = require("mongoose");

const TagsSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
});

const ReactNotesTags = mongoose.model("reactNotesTags", TagsSchema);

module.exports = ReactNotesTags;
