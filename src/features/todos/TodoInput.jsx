import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { saveNewTodo } from "./todoSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle");
  const dispatch = useDispatch();
  const inputRef = useRef();

  // When enter/return is pressed by the user,
  // trim the text, set status to loading and
  // dispatch redux to add the todo to the state.
  // Finally, reset input variables.
  const handleKeyDown = async (e) => {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      setStatus("loading");
      await dispatch(saveNewTodo(trimmedText));
      setText("");
      setStatus("idle");
    }
  };

  let isLoading = status === "loading";
  let placeholder = isLoading ? "" : "Create a new Todo...";
  let loader = isLoading ? <div>Adding...</div> : null;

  // Focuses on the input box on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className={
        "rounded-lg overflow-hidden flex items-center bg-white dark:bg-slate-800 px-4 py-1 shadow-sm"
      }
    >
      <i className="border-2 border-gray-500/30 border-solid rounded-full w-5 h-5"></i>
      <input
        className="w-full rounded-lg border-none bg-transparent dark:text-white outline-green-500 focus:ring-0"
        type="text"
        ref={inputRef}
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      {loader}
    </div>
  );
};

export default TodoInput;
