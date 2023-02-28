import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUpload } from "@fortawesome/free-solid-svg-icons";

function Form({ newTodo, setNewTodo, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );
}

export default Form;
