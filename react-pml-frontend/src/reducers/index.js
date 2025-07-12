import { combineReducers } from "redux";
import allTags from "./tagReducer";
import reactNotes from "./notesReducer";
const rootReducer = combineReducers({ allTags, reactNotes });

export default rootReducer;
