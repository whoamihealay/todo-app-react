import React from "react";
import { setAll, setActive, setCompleted } from "../features/todos/todoSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center gap-4 text-slate-500 dark:text-gray-600 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg">
      <button onClick={() => dispatch(setAll())}>All</button>
      <button onClick={() => dispatch(setActive())}>Active</button>
      <button onClick={() => dispatch(setCompleted())}>Completed</button>
    </div>
  );
};

export default Filter;
