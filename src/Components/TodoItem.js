import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../Redux/Slice/todoslice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteCheck = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            className="ms-2"
            checked={completed}
            onChange={handleCompleteCheck}
          />
          {title}
        </div>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
