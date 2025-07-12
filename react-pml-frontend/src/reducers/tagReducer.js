const initialState = {
  data: [],
  loading: null,
  error: null,
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_TAGS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ALL_TAGS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };

    case "FETCH_ALL_TAGS_FAILURE":
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

export default tagReducer;
