import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";

const Todo = ({ todo, id }) => {
  const [todoStyle, setTodoStyled] = useState("");
  const dispatch = useDispatch();

  const isChecked = () => {
    if (document.getElementById(todo).checked) {
      setTodoStyled("line-through");
    } else {
      setTodoStyled("");
    }
  };

  return (
    <div>
      <div className="flex justify-between p-4 items-center">
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="checkbox"
              name={todo}
              id={todo}
              className="rounded-full h-5 w-5"
              onChange={isChecked}
            />
          </div>
          <p className={`text-slate-800 ${todoStyle}`}>{todo}</p>
        </div>
        <button onClick={() => dispatch(deleteTodo(id))}>
          <img className="h-4 w-4" src="/images/icon-cross.svg" alt="X" />
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Todo;
