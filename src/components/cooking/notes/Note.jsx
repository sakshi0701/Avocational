import React from "react";
import { FaTrash } from 'react-icons/fa';

function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default Note;
