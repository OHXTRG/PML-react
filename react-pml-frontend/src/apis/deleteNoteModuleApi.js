import axios from "axios";

export const deleteNoteModuleApi = async (noteModule) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL}delete-note-module/${noteModule}`
  );
  return response;
};
