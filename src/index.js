import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

//export let rerenderEntireTree = (state) => {};

//rerenderEntireTree(store.getState())

//store.subscribe(() => { rerenderEntireTree(store.getState()) })
