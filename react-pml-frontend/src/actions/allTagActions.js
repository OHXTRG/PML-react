import axios from "axios";

export const fetchAllTags = (noteModule) => async (dispatch) => {
  dispatch({ type: "FETCH_ALL_TAGS_REQUEST" });
  ////// call api from api folders
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}notes/${noteModule}/getAllTags`
    );

    // console.log(response.data.data[0].allTags);

    if (response.data.success) {
      dispatch({
        type: "FETCH_ALL_TAGS_SUCCESS",
        payload: response.data.data[0].allTags,
      });
    } else {
      dispatch({
        type: "FETCH_ALL_TAGS_FAILURE",
        payload: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: "FETCH_ALL_TAGS_FAILURE",
      payload: error.message,
    });
  }
};
