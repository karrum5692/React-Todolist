import React from "react";

const Complete = ({ todos, setTodos }) => {
  return (
    <>
      {" "}
      <p>완료한 항목</p>
      <ul>
        {todos
          .filter(function (todoList) {
            return todoList.completed;
          })
          .map(function (t) {
            return (
              <li key={t.id}>
                {t.title}
                <button
                  onClick={function () {
                    setTodos(
                      todos.map(function (item) {
                        if (item.id === t.id) {
                          return { ...item, completed: !item.completed };
                        }
                        return item;
                      })
                    );
                  }}
                >
                  취소하기
                </button>
                <button
                  onClick={function () {
                    const reTodos = todos.filter(function (item) {
                      return item.id !== t.id;
                    });
                    setTodos(reTodos);
                  }}
                >
                  삭제하기
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Complete;
