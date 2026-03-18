import TodoItem from "./TodoItem";

function TodoList({ listTitle, todos, onToggle, onDelete }) {
  return (
    <>
      <h2>{listTitle}</h2>
      <ul>
        {todos.map(function (todo) {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
