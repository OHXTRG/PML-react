const ReactNotes = require("../models/reactNotes");
const ReactNotesTags = require("../models/reactNotesTags");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../utils/customError");
const Notes = require("../models/notes");
const { createModuleModel, getModuleModel } = require("../models/dynamicModel");
const mongoose = require("mongoose");

exports.addNoteModule = asyncWrapper(async (req, res, next) => {
  const data = req.body;
  const note = await Notes.create(data);

  createModuleModel(data.title.trim().split(" ").join(""));

  return res.status(200).json({
    status: 200,
    success: true,
    message: `Note Module created successfully`,
    data: note,
  });
});

exports.getAllNoteModule = asyncWrapper(async (req, res, next) => {
  const noteModules = await Notes.find({});
  return res.status(200).json({
    status: 200,
    success: true,
    message: `note modules retrived successfully`,
    data: noteModules,
  });
});
exports.deleteNoteModule = asyncWrapper(async (req, res, next) => {
  const noteModule = req.params.noteModule;

  const noteModuleModel = getModuleModel(noteModule);

  if (!noteModuleModel) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: `No note module with name ${noteModule} found`,
    });
  }

  // await noteModuleModel.drop();
  // mongoose.deleteModel(noteModule);
  await noteModuleModel.collection.drop();

  await Notes.deleteMany({ title: noteModule });
  return res.status(200).json({
    status: 200,
    success: true,
    message: `note mdoule deleted successfully`,
  });
});
