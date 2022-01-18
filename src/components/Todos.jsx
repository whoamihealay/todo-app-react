import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

const Todos = () => {
  const todoList = useSelector((state) => state.todo.value);

  return (
    <div className="bg-white rounded-lg">
      {todoList.map(
        (todo, index) => todo && <Todo key={index} id={index} todo={todo} />
      )}
      <div className="flex justify-between text-gray-500 p-4">
        <div>{todoList.length} items left</div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Todos;
