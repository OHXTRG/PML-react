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
    case "EMPTY_SEARCH_STATE":
      return {
        ...state,
        data: [],
        loading: false,
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
