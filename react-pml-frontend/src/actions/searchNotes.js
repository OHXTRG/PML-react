import axios from "axios";

export const searchNotes = (key, noteModule) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SEARCH_NOTES_REQUEST" });
    const response = await axios(
      `${process.env.REACT_APP_API_URL}notes/${noteModule}/search?search=${key}`
    );

    if (response.data.success) {
      dispatch({
        type: "FETCH_SEARCH_NOTES_SUCCESS",
        payload: response.data.data,
      });
    } else {
      dispatch({
        type: "FETCH_SEARCH_NOTES_FAILED",
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error, "error while fetching search data");
    dispatch({
      type: "FETCH_SEARCH_NOTES_FAILED",
      payload: error.message,
    });
  }
};
