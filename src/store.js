import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todoSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
