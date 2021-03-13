import React, { useState } from "react";
import { FaPlus } from 'react-icons/fa';

function CreateArea({ submitButton, onAdd }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function hadnleClick() {
    setIsExpanded(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  submitButton = (e) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div className="form">
      <form>
        {isExpanded && (
          <input
            value={note.title}
            name="title"
            onChange={handleChange}
            placeholder="Title"
            type="text"
          />
        )}

        <p>
          <textarea
            onClick={hadnleClick}
            onChange={handleChange}
            name="content"
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>

        <button onClick={submitButton}>
          <FaPlus/> 
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
