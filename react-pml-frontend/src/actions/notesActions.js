import axios from "axios";

export const fetchNotesData = () => async (dispatch) => {
  dispatch({ type: "FETCH_NOTES_REQUEST" });
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}getAllReactNotes`
    );
    console.log(response, "kjaslfkj");
    if (response.data.success) {
      dispatch({ type: "FETCH_NOTES_SUCCESS", payload: response.data.data });
    } else {
      dispatch({ type: "FETCH_NOTES_REQUEST", payload: response.data.message });
    }
  } catch (error) {
    console.log(error, "error in api getAllnotes");
    dispatch({ type: "FETCH_NOTES_REQUEST", payload: error.message });
  }
};
