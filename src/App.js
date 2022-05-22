import { useState } from "react";
import Todo from "./Components/Todo";
import DUMMY_DATA from "./Data/Data";

function App() {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };
  return <Todo items={todos} onAddTodo={addTodoHandler} />;
}

export default App;
