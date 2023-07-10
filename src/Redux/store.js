import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice/todoslice";

export default configureStore({
  reducer: {
    TODOS: todoReducer,
  },
});
