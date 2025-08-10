import axios from "axios";

export const DeleteNote = async (id, api) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL}${api}/${id}`
  );
  return response;
};
