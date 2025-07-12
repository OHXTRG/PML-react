const ReactNotes = require("../models/reactNotes");
const ReactNotesTags = require("../models/reactNotesTags");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../utils/customError");

exports.addReactNotes = asyncWrapper(async (req, res, next) => {
  // console.log(req.body, "dslfkjadslfkj");
  const { title, note, tags, impLinks } = req.body;

  if (Array.isArray(tags)) {
    // console.log(tagIds, "dskjfladsfj tag ids ");
    const newNote = await ReactNotes.create({
      title,
      note,
      tags,
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

exports.getAllTags = asyncWrapper(async (req, res, next) => {
  const tagData = await ReactNotes.aggregate([
    {
      $project: {
        tags: 1,
      },
    },
    { $unwind: "$tags" },
    { $group: { _id: null, allTags: { $addToSet: "$tags" } } },
    { $project: { _id: 0, allTags: 1 } },
  ]);

  console.log(tagData, "kjflasjl");

  return res.status(201).json({
    status: 201,
    success: true,
    message: `Tags retrived successfully`,
    data: tagData,
  });
});

exports.getAllNotes = asyncWrapper(async (req, res, next) => {
  // const allNotesData = await ReactNotes.aggregate();
  const allNotesData = await ReactNotes.find({});

  return res.status(201).json({
    status: 201,
    success: true,
    message: `Notes Retrived successfully`,
    data: allNotesData,
  });
});
