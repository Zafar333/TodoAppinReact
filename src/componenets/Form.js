import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./formStyle.css";

const Form = ({ input, setinput, todo, settodo, edittodo, setedittodo }) => {
  const onInputchange = (e) => {
    setinput(e.target.value);
  };
  const updateTodo = (title, id, completed) => {
    const newtodo = todo.map((todos) =>
      todos.id === id ? { title, id, completed } : todos
    );

    settodo(newtodo);
    setedittodo("");
  };
  useEffect(() => {
    if (edittodo) {
      setinput(edittodo.title);
    } else {
      setinput("");
    }
  }, [setinput, edittodo]);
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("edit", edittodo);
    if (!edittodo) {
      settodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setinput("");
    } else {
      updateTodo(input, edittodo.id, edittodo.completed);
    }
  };
  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo ..."
        className="taskinput"
        value={input}
        required
        onChange={onInputchange}
      />
      <button type="submit" className="button-add">
        {edittodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
