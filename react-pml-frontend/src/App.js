import logo from "./logo.svg";
import "./App.css";
import SocketUpdate from "./services/SocketUpdate";
import AppRoutes from "./routes/AppRoutes";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./themes/darkTheme";

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Provider store={store}>
          <ToastContainer />
          <SocketUpdate />
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
