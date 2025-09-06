import axios from "axios";

export const addNoteModule = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}add-note-module`,

    data
  );
  return response.data;
};
