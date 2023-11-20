import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import {store} from "./store/store";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <CssBaseline> 
      <App />
    </CssBaseline> 
  </Provider>
);
