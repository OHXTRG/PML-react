const ReactNotes = require("../models/reactNotes");
const ReactNotesTags = require("../models/reactNotesTags");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../utils/customError");

exports.addReactNotes = asyncWrapper(async (req, res, next) => {
  const { title, note, tags, impLinks } = req.body;

  if (Array.isArray(tags)) {
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
    throw createCustomError(400, "Tags must be an array");
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

  return res.status(201).json({
    status: 201,
    success: true,
    message: `Tags retrived successfully`,
    data: tagData,
  });
});

exports.getAllNotes = asyncWrapper(async (req, res, next) => {
  const allNotesData = await ReactNotes.find({});
  return res.status(201).json({
    status: 201,
    success: true,
    message: `Notes Retrived successfully`,
    data: allNotesData,
  });
});

exports.getNote = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  console.log(id, "id klsdjflkdsjalkj");
  const note = await ReactNotes.findOne({ _id: id });
  if (note) {
    return res.status(200).json({
      status: 200,
      success: true,
      message: `Note Retrived successfully`,
      data: note,
    });
  }
  throw createCustomError(400, "note not found");
});

exports.deleteNote = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const delres = await ReactNotes.deleteOne({ _id: id });
  console.log(delres, "delete res ");
  if (delres?.deletedCount == 1) {
    return res.status(201).json({
      status: 201,
      success: true,
      message: "Note deleted successfully",
    });
  }

  throw createCustomError(400, `no note found with id${id}`);
});

exports.updateNote = asyncWrapper(async (req, res, next) => {
  const data = req.body;
  const updatedData = await ReactNotes.updateOne({ _id: data.id }, { ...data });
  return res.status(201).json({
    status: 201,
    success: true,
    message: "note updated successfully",
    data: updatedData,
  });
});
