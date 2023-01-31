import React from "react";
import "./todolistStyle.css";

const TodosList = ({
  todo,
  settodo,
  edittodo,
  setedittodo,
  input,
  setinput,
}) => {
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
    let findtodo = todo.find((todos) => todos.id === id);

    setedittodo(findtodo);
  };
  return (
    <div className="list-container">
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
              id="btn"
              className="button-complete task-button"
              onClick={() => handleComplete(todos)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              id="btn"
              className="button-edit task-button"
              onClick={() => handleEdit(todos)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              id="btn"
              className="button-delete task-button"
              onClick={() => handleDelete(todos)}
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
