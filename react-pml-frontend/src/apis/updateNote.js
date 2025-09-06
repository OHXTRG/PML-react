import axios from "axios";

export const updateNote = async (values, noteModule) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}notes/${noteModule}/updateNote`,
    values
  );
  return response.data;
};
