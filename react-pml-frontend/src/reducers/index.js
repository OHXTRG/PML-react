import { combineReducers } from "redux";
// import { combineReducers } from "redux";
import allTags from "./tagReducer";
import reactNotes from "./notesReducer";
import searchData from "./searchReducer";
import noteModules from "./noteModules";
const rootReducer = combineReducers({
  allTags,
  reactNotes,
  searchData,
  noteModules,
});

export default rootReducer;
