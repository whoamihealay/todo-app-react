import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";
import { useSelector } from "react-redux";

const Todo = ({
  todo,
  id,
  handleDragStart,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
}) => {
  const [todoStyle, setTodoStyled] = useState("");
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setTodoStyled("line-through");
    } else {
      setTodoStyled("");
    }
  }, [isChecked]);

  return (filter.active && isChecked) || (filter.completed && !isChecked) ? (
    <div></div>
  ) : (
    <div
      className="bg-white dark:bg-slate-800 "
      id={id}
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <div
        id={todo}
        className="flex gap-4 justify-between p-4 items-center rounded-lg"
      >
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="checkbox"
              name={todo}
              className="rounded-full h-5 w-5 bg-transparent"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </div>
          <p className={`text-slate-800 dark:text-gray-300 ${todoStyle}`}>
            {todo}
          </p>
        </div>
        <button onClick={() => dispatch(deleteTodo(todo))}>
          <img className="h-4 w-4" src="/images/icon-cross.svg" alt="X" />
        </button>
      </div>
      <hr className="dark:opacity-10" />
    </div>
  );
};

export default Todo;
