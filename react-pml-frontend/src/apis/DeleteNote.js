import axios from "axios";

export const DeleteNote = async (id, noteModule) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL}notes/${noteModule}/deleteNote/${id}`
  );
  return response;
};
