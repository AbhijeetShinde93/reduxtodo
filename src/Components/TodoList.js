import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.TODOS);

  console.log(todos);
  return (
    <div className="col-12">
      <h5>ListA</h5>
      <ul className="list-group">
        {todos.length &&
          todos.map((todo) => {
            return (
              <TodoItem
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
