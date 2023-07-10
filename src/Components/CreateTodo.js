import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Redux/Slice/todoslice";

const CreateTodo = () => {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addToDo({
        title: value,
      })
    );
    console.log("user entered" + value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <h1>ToDo </h1>
        <div className="col-md-6">
          <label className="">Create TODO</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Add todo..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn btn-primary">Create</button>
        </div>
      </div>
    </form>
  );
};

export default CreateTodo;
