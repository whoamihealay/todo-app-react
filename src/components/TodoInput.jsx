import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const TodoInput = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue("");
      }}
      className={`rounded-lg overflow-hidden flex items-center bg-white dark:bg-slate-800 px-4 py-1 shadow-sm`}
    >
      <button className="border-2 border-gray-500/30 border-solid rounded-full w-5 h-5">
        <span className="sr-only">submit</span>
      </button>
      <input
        className="w-full rounded-lg border-none bg-transparent dark:text-white outline-green-500 focus:ring-0"
        type="text"
        placeholder="Create a new Todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
