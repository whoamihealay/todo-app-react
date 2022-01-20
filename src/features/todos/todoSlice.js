import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filter: { all: true, active: false, completed: false },
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item !== action.payload);
    },
    switchTodo: (state, action) => {
      let from = action.payload.from;
      let to = action.payload.to;
      [state.todos[from], state.todos[to]] = [
        state.todos[to],
        state.todos[from],
      ];
    },
    setAll: (state) => {
      state.filter = {
        all: true,
        active: false,
        completed: false,
      };
    },
    setActive: (state) => {
      state.filter = {
        all: false,
        active: true,
        completed: false,
      };
    },
    setCompleted: (state) => {
      state.filter = {
        all: false,
        active: false,
        completed: true,
      };
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  switchTodo,
  setAll,
  setActive,
  setCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
