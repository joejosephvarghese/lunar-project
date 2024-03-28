import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
// import { Provider } from "react-redux";
// import store from "../src/features/redux/app/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     {/* <Provider > */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
