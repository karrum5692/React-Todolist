import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  function onToggle(id) {
    setTodos(
      todos.map(function (todo) {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  function onDelete(id) {
    setTodos(
      todos.filter(function (todo) {
        return todo.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoForm
        todos={todos}
        setTodos={setTodos}
        title={title}
        setTitle={setTitle}
      />

      <TodoList
        listTitle="할일 목록"
        todos={todos.filter(function (t) {
          return !t.completed;
        })}
        onToggle={onToggle}
        onDelete={onDelete}
      />

      <TodoList
        listTitle="완료 목록"
        todos={todos.filter(function (t) {
          return t.completed;
        })}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
