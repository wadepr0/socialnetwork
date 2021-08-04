import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./storeContext";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState())

store.subscribe(() => { rerenderEntireTree(store.getState()) })
