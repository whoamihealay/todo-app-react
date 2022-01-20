import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchTodo } from "../features/todos/todoSlice";

import Todo from "./Todo";

const Todos = () => {
  const todoList = useSelector((state) => state.todos.todos);

  const hoverStyle = "bg-gray-300";
  const dispatch = useDispatch();

  const [changeOrder, setChangeOrder] = useState({
    from: null,
    to: null,
  });

  const handleDragStart = (ev) => {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    setChangeOrder((pre) => ({
      ...pre,
      from: ev.target.id,
    }));
  };

  const handleDragOver = (ev) => {
    ev.preventDefault();
    const data = ev.currentTarget.id;
    setChangeOrder((pre) => ({
      ...pre,
      to: data,
    }));
  };

  const handleDragEnter = (ev) => {
    ev.target.classList.add(hoverStyle);
  };

  const handleDragLeave = (ev) => {
    ev.target.classList.remove(hoverStyle);
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    ev.target.classList.remove(hoverStyle);
    if (changeOrder.from && changeOrder.to) {
      dispatch(switchTodo(changeOrder));
    }
  };

  return (
    <div
      id="target"
      className="bg-white dark:bg-slate-800 rounded-lg"
      onDrop={handleDrop}
    >
      {todoList.map(
        (todo, index) =>
          todo && (
            <Todo
              key={index}
              id={index}
              todo={todo}
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              handleDragOver={handleDragOver}
            />
          )
      )}
      <div className="flex justify-between text-gray-500 p-4">
        <div>{todoList.length} items left</div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Todos;
