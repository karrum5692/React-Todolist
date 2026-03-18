import React from "react";

const TodoForm = ({ todos, title, setTodos, setTitle }) => {
  return (
    <>
      <h1>Todo List</h1>

      <hr />

      <form
        onSubmit={function (t) {
          t.preventDefault();
          if (title.trim() === "") {
            return alert("할일을 입력해주세요");
          }

          const newTodos = [
            ...todos,
            {
              id: Date.now(),
              title,
              completed: false,
              createdAt: new Date().toLocaleString(),
            },
          ];
          setTodos(newTodos);

          setTitle("");
        }}
      >
        <input
          type="text"
          value={title}
          placeholder="할일 입력..."
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">추가</button>
      </form>
    </>
  );
};

export default TodoForm;
