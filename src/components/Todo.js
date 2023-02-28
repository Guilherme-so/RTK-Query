import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, deleteTodo, updateTodo }) {
  return (
    <article>
      <div className="todo">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            updateTodo({ ...todo, completed: !todo.completed });
          }}
        />
      </div>
      {todo.completed ? (
        <p className="stroke">{todo.title}</p>
      ) : (
        <p>{todo.title}</p>
      )}
      <div className="buttonsContainer">
        <button
          className="trash"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </article>
  );
}

export default Todo;
