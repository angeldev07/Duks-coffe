import ReactDOM from "react-dom/client";

// Imports of redux 
import { Provider } from "react-redux";
import {store} from "./store/store";

// Imports of MUI
import CssBaseline from '@mui/material/CssBaseline';

// import of router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <CssBaseline> 
      <RouterProvider router={router} />
    </CssBaseline> 
  </Provider>
);
