const initialState = {
  data: null,
  loading: false,
  error: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NOTES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_NOTES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_NOTES_REQUEST":
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

export default notesReducer;
