import axios from "axios";

export const createNote = async (values) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}addReactNotes`,
    values
  );
  return response.data;
};
