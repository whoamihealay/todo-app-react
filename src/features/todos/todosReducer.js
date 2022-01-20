import {
  TODOS_FETCH_TODOS,
  TODOS_ADD_TODO,
  TODOS_DELETE_TODO,
  TODOS_FILTER_TODOS,
  TODOS_MOVE_TODO,
} from "../types";

const todosReducer = (state, action) => {
  switch (action.type) {
    case TODOS_FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
