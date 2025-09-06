const initialState = {
  loading: false,
  data: [],
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_NOTES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SEARCH_NOTES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_SEARCH_NOTES_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
