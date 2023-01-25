import React from "react";

const TodosList = ({ todo, settodo, edittodo, setedittodo }) => {
  const handleDelete = ({ id }) => {
    settodo(todo.filter((todos) => todos.id !== id));
  };
  const handleComplete = (todos) => {
    settodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findtodo = todo.find((todos) => todos.id === id);
    setedittodo(findtodo);
  };
  return (
    <div>
      TodosList
      {todo.map((todos) => (
        <li className="list-items " key={todos.id}>
          <input
            type="text"
            value={todos.title}
            className={'list ${todos.completed ? "complete":""}'}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todos)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todos)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => {
                handleDelete(todos);
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
