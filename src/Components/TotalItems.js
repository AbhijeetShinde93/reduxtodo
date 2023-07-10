import React from "react";
import { useSelector } from "react-redux";

const TotalItems = () => {
  const completedTodos = useSelector((state) =>
    state.TODOS.filter((todo) => todo.completed === true)
  );

  return (
    <div className="row mt-2">
      <h3>Total Items {completedTodos.length}</h3>
    </div>
  );
};

export default TotalItems;
