import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faArrowUpRightFromSquare,
  faCancel,
} from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, deleteTodo, updateTodo }) {
  const [editInput, setEditInput] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  return (
    <article>
      {edit && (
        <div className="editModal">
          <div className="editContainer">
            <input
              type="text"
              className="input"
              value={editInput}
              onChange={({ target }) => setEditInput(target.value)}
            />
            <button
              className="send"
              onClick={() => {
                updateTodo({ ...todo, title: editInput });
                setEdit(false);
              }}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
            <button className="send" onClick={() => setEdit(false)}>
              <FontAwesomeIcon icon={faCancel} />
            </button>
          </div>
        </div>
      )}

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
        <button className="edit" onClick={() => setEdit((prev) => !prev)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>

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
