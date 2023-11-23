import ReactDOM from "react-dom/client";

// Imports of redux 
import { Provider } from "react-redux";
import {store} from "./store/store";

// Imports of MUI
import CssBaseline from '@mui/material/CssBaseline';

// import of router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline> 
        <RouterProvider router={router} />
      </CssBaseline> 
    </ThemeProvider>
  </Provider>
);
