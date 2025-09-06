const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
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

exports.createModuleModel = (module) => {
  mongoose.model(module, noteSchema);
};

exports.getModuleModel = (module) => {
  console.log(mongoose.models, "all the collections in the data base");
  if (mongoose.models[module]) {
    return mongoose.models[module];
  } else {
    return null;
  }
};

exports.getNoteModuleModel = (collectionName) => {
  if (mongoose.model[collectionName]) {
    return mongoose.model[collectionName];
  } else {
    return mongoose.model(collectionName, noteSchema, collectionName);
  }
};

exports.collectionExists = async (collectionName) => {
  try {
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    return collections.some((col) => col.name === collectionName);
  } catch (error) {
    console.error("Error checking collection:", error);
    return false;
  }
};
