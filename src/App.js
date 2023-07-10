import "./App.css";
import "./common/common.css";
import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";

import TotalItems from "./Components/TotalItems";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CreateTodo />
        <TodoList />
        <TotalItems />
      </div>
    </div>
  );
}

export default App;
