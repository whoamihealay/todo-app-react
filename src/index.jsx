// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// API
import "./api/server";
// Redux
import store from "./store";
import { Provider } from "react-redux";
import { fetchTodos } from "./features/todos/todoSlice";
// WebVitals
import reportWebVitals from "./reportWebVitals";

store.dispatch(fetchTodos());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
