import axios from "axios";

export const createNote = async (values, noteModule) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}notes/${noteModule}/addNote`,
    // `${process.env.REACT_APP_API_URL}notes/dailybriefings/addNote`,
    values
  );
  return response.data;
};
