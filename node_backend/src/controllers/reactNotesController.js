const ReactNotes = require("../models/reactNotes");
const ReactNotesTags = require("../models/reactNotesTags");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../utils/customError");

exports.addReactNotes = asyncWrapper(async (req, res) => {
  // console.log(req.body, "dslfkjadslfkj");
  const { title, note, tags, impLinks } = req.body;

  if (Array.isArray(tags)) {
    const mappedTags = tags.map((tag) => ({ title: tag }));
    // console.log(mappedTags, "kdsjf;lskadjf;lasdkfjsldk mapped");
    const newTags = await ReactNotesTags.insertMany(mappedTags);
    // console.log(newTags, "jdslkfjasdlfdsjlkdsjf s new tags ");
    const tagIds = newTags.map((obj) => obj._id);
    // console.log(tagIds, "dskjfladsfj tag ids ");
    const newNote = await ReactNotes.create({
      title,
      note,
      tags: tagIds,
      impLinks,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: `Note created successfully with id ${newNote._id}`,
      data: newNote,
    });
  } else {
    return createCustomError(400, "Tags must be an array");
  }
});
