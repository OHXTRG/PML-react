const initialState = {
  data: null,
  loading: false,
  error: null,
  searchData: [],
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

    case "SEARCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        searchData: action.payload,
      };

    case "EMPTY_SEARCH":
      return {
        ...state,
        error: null,
        searchData: [],
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default noteModuleReducer;
