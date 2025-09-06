import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useDispatch } from "react-redux";
import { searchNotes } from "../actions/searchNotes";
import { useDebounce } from "../hooks/useDebounce";

const MyContext = createContext(null);

const CustomContext = ({ children }) => {
  const [user, setUser] = useState();
  const [searchKey, setSearchKey] = useState({ key: "", noteModule: "" });

  const dispatch = useDispatch();

  const updateSearchData = useCallback(
    (key, noteModule) => {
      dispatch(searchNotes(key, noteModule));
    },
    [dispatch]
  );
  ////// debounce the search api
  const debouncedSearch = useDebounce(updateSearchData, 500);

  useEffect(() => {
    if (searchKey.key.trim() !== "")
      debouncedSearch(searchKey.key, searchKey.noteModule);
  }, [searchKey]);

  return (
    <>
      <MyContext.Provider value={{ user, setUser, searchKey, setSearchKey }}>
        {children}
      </MyContext.Provider>
    </>
  );
};

export const useCustomContextHook = () => {
  const contextContent = useContext(MyContext);
  if (!contextContent)
    throw new Error("useCounter must be used within CounterProvider");
  return contextContent;
};

export default CustomContext;
