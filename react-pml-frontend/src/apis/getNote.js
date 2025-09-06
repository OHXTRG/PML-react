import axios from "axios";

export const getNote = async (id, noteModule) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}notes/${noteModule}/getNote/${id}`
  );
  return response.data;
};
