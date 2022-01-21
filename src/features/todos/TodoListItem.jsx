import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { todoDeleted, todoToggled, selectTodoById } from "./todoSlice";

const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  const { text, completed } = todo;
  const dispatch = useDispatch();
  const [todoStyle, setTodoStyled] = useState(null);

  // Toggle todo completeness status
  const handleCompletedChanged = () => {
    dispatch(todoToggled(todo.id));
  };

  // Delete todo
  const onDelete = () => {
    dispatch(todoDeleted(todo.id));
  };

  useEffect(() => {
    if (completed) {
      setTodoStyled("line-through");
    } else {
      setTodoStyled(null);
    }
  }, [completed]);

  return (
    <li className="bg-white dark:bg-slate-800 rounded-lg">
      <div className="flex gap-4 justify-between p-4 items-center rounded-lg">
        <div className="flex gap-4">
          <div className="relative">
            <input
              className="rounded-full h-5 w-5 bg-transparent"
              type="checkbox"
              checked={completed}
              onChange={handleCompletedChanged}
            />
          </div>
          <p className={`text-slate-800 dark:text-gray-300 ${todoStyle}`}>
            {text}
          </p>
        </div>
        <button onClick={onDelete}>
          <img className="h-4 w-4" src="/images/icon-cross.svg" alt="X" />
        </button>
      </div>
      <hr className="dark:opacity-10" />
    </li>
  );
};

export default TodoListItem;
