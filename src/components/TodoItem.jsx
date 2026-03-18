function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <strong>{todo.title}</strong>
      <br />
      <small>{todo.createdAt}</small>
      <br />

      <button
        onClick={function () {
          onToggle(todo.id);
        }}
      >
        {todo.completed ? "취소" : "완료"}
      </button>

      <button
        onClick={function () {
          onDelete(todo.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
