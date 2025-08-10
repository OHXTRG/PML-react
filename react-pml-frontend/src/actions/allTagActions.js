import axios from "axios";

export const fetchAllTags = () => async (dispatch) => {
  dispatch({ type: "FETCH_ALL_TAGS_REQUEST" });
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}react/getAllTags`
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
