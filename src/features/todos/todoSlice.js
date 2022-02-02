import { createSlice, createSelector } from "@reduxjs/toolkit";
import { client } from "../../api/client";
import { StatusFilters } from "../filters/filtersSlice";

const initialState = {
  status: "idle", // Idle or Loading
  entities: {},
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload;
      state.entities[todo.id] = todo;
    },
    todoDeleted(state, action) {
      delete state.entities[action.payload];
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    todosCompleted(state) {
      Object.values(state.entities).forEach((todo) => {
        todo.completed = true;
      });
    },
    todosClearCompleted(state) {
      Object.values(state.entities).forEach((todo) => {
        if (todo.completed) {
          delete state.entities[todo.id];
        }
      });
    },
    todosLoading(state) {
      state.status = "loading";
    },
    todosLoaded(state, action) {
      const newEntities = {};
      action.payload.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      state.entities = newEntities;
      state.status = "idle";
    },
  },
});

export const {
  todoAdded,
  todoDeleted,
  todoToggled,
  todosCompleted,
  todosClearCompleted,
  todosLoading,
  todosLoaded,
} = todoSlice.actions;

export default todoSlice.reducer;

// Thunks
export const fetchTodos = () => async (dispatch) => {
  dispatch(todosLoading());
  const response = await client.get("/veryRealApi/todos");
  dispatch(todosLoaded(response.todos));
};

export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch) {
    const initialTodo = { text };
    const response = await client.post("/veryRealApi/todos", {
      todo: initialTodo,
    });
    dispatch(todoAdded(response.todo));
  };
}

const selectTodoEntities = (state) => state.todos.entities;

export const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);

export const selectTodoById = (state, todoId) => {
  return selectTodoEntities(state)[todoId];
};

export const selectTodoIds = createSelector(selectTodos, (todos) =>
  todos.map((todo) => todo.id)
);

export const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filters,
  (todos, filters) => {
    const { status } = filters;
    const showAllCompletions = status === StatusFilters.All;
    if (showAllCompletions) {
      return todos;
    }
    const completedStatus = status === StatusFilters.Completed;

    return todos.filter((todo) => {
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus;
      return statusMatches;
    });
  }
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
