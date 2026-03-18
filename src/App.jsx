import { useState } from "react";
import "./App.css";
import "./APP.module.css";

import TodoList from "./components/TodoList";
import Incomplete from "./components/Incomplete";
import Complete from "./components/Complete";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoList
        todos={todos}
        setTitle={setTitle}
        title={title}
        setTodos={setTodos}
      />
      <br />
      <br />
      <Incomplete todos={todos} setTodos={setTodos} />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Complete todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
