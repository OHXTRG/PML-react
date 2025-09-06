const initialState = {
  data: null,
  loading: false,
  error: null,
};

const noteModuleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NOTE_MODULES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_NOTE_MODULES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_NOTE_MODULES_FAILED":
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

export default noteModuleReducer;
