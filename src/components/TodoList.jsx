import React from "react";

const TodoList = ({ todos, setTitle, title, setTodos }) => {
  return (
    <div>
      <form
        onSubmit={function (e) {
          e.preventDefault();

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
        }}
      >
        <p> 할 일 제목</p>
        <input
          type="text"
          onChange={function (titleEvent) {
            setTitle(titleEvent.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">등록하기</button>
      </form>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default TodoList;
