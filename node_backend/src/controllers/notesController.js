const { asyncWrapper } = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../utils/customError");
const {
  getModuleModel,
  getNoteModuleModel,
  collectionExists,
} = require("../models/dynamicModel");

exports.addNotes = asyncWrapper(async (req, res, next) => {
  const { title, note, tags, impLinks } = req.body;

  const noteModule = req.params.noteModule;

  const noteModuleModel = getModuleModel(noteModule);

  if (!noteModuleModel) {
    res.status(404).json({
      status: 404,
      success: false,
      message: `No note module with name ${noteModule} found`,
    });
  }

  if (Array.isArray(tags)) {
    const newNote = await noteModuleModel.create({
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
  const noteModule = req.params.noteModule;

  // const noteModuleModel = getModuleModel(noteModule);
  if (!(await collectionExists(noteModule))) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: `No note module with name ${noteModule} found`,
    });
  }
  const noteModuleModel = getNoteModuleModel(noteModule);

  const tagData = await noteModuleModel.aggregate([
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
  const noteModule = req.params.noteModule;
  console.log(noteModule, "noet mdoule dslfjl");
  if (!(await collectionExists(noteModule))) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: `No note module with name ${noteModule} found`,
    });
  }
  const noteModuleModel = getNoteModuleModel(noteModule);

  const allNotesData = await noteModuleModel.find({});
  return res.status(201).json({
    status: 201,
    success: true,
    message: `Notes Retrived successfully`,
    data: allNotesData,
  });
});

exports.getNote = asyncWrapper(async (req, res, next) => {
  const noteModule = req.params.noteModule;

  const noteModuleModel = getModuleModel(noteModule);

  if (!noteModuleModel) {
    res.status(404).json({
      status: 404,
      success: false,
      message: `No note module with name ${noteModule} found`,
    });
  }

  const id = req.params.id;
  console.log(id, "id klsdjflkdsjalkj");
  const note = await noteModuleModel.findOne({ _id: id });
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
  const noteModule = req.params.noteModule;

  const noteModuleModel = getModuleModel(noteModule);

  if (!noteModuleModel) {
    res.status(404).json({
      status: 404,
      success: false,
      message: `No note module with name ${noteModule} found`,
    });
  }

  const id = req.params.id;
  const delres = await noteModuleModel.deleteOne({ _id: id });
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
  const noteModule = req.params.noteModule;

  const noteModuleModel = getModuleModel(noteModule);

  if (!noteModuleModel) {
    res.status(404).json({
      status: 404,
      success: false,
      message: `No note module with name ${noteModule} found`,
    });
  }
  const data = req.body;
  const updatedData = await noteModuleModel.updateOne(
    { _id: data.id },
    { ...data }
  );
  if (updatedData.matchedCount == 0) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "No id found",
    });
  }

  return res.status(201).json({
    status: 201,
    success: true,
    message: "note updated successfully",
    data: updatedData,
  });
});

exports.searchNote = asyncWrapper(async (req, res, next) => {
  const noteModule = req.params.noteModule;

  const noteModuleModel = getModuleModel(noteModule);

  if (!noteModuleModel) {
    res.status(404).json({
      status: 404,
      success: false,
      message: `No note module with name ${noteModule} found`,
    });
  }
  const key = req.query.search || "";
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const tags = req.query.tag;
  const link = req.query.link;
  const title = req.query.title;
  const note = req.query.note;

  const searchQuery = [];

  ////////////////////// applying filter with query params
  if (tags) {
    searchQuery.push({
      tags: { $elemMatch: { $regex: escapedKey, $options: "i" } },
    });
  }

  if (link) {
    searchQuery.push({
      impLinks: { $elemMatch: { $regex: escapedKey, $options: "i" } },
    });
  }

  if (title) {
    searchQuery.push({
      title: { $regex: escapedKey, $options: "i" },
    });
  }

  if (note) {
    searchQuery.push({ note: { $regex: escapedKey, $options: "i" } });
  }
  ////////////////////// applying filter with query params

  ///////////////////// applying search without filters all columsn
  if (searchQuery.length == 0) {
    searchQuery.push(
      {
        tags: { $elemMatch: { $regex: escapedKey, $options: "i" } },
      },
      { note: { $regex: escapedKey, $options: "i" } },
      {
        impLinks: { $elemMatch: { $regex: escapedKey, $options: "i" } },
      },
      {
        title: { $regex: escapedKey, $options: "i" },
      }
    );
  }
  ///////////////////// applying search without filters all columsn

  console.log(searchQuery, "search query");

  const data = await noteModuleModel.find({
    $or: searchQuery,
  });

  return res.status(201).json({
    status: 201,
    success: true,
    message: "search found successfully",
    data: data,
  });
});
