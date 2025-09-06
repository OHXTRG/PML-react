import axios from "axios";

export const fetchNoteModules = (key, api) => async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_NOTE_MODULES_REQUEST",
    });
    const response = await axios(
      `${process.env.REACT_APP_API_URL}get-all-note-module`
    );

    if (response.data.success) {
      dispatch({
        type: "FETCH_NOTE_MODULES_SUCCESS",
        payload: response.data.data,
      });
    } else {
      dispatch({
        type: "FETCH_NOTE_MODULES_FAILED",
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error, "error while fetching search data");
    dispatch({
      type: "FETCH_NOTE_MODULES_FAILED",
      payload: error.message,
    });
  }
};
