import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import reducers from "./module";
import "./style/global.css";

const rootElement = document.getElementById("root");
const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
