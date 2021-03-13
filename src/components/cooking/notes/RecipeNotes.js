import React, { useState } from "react";
import "./notes.css";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Count from "./count";

function RecipeNotes(props) {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {

    setNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prev) => {
      return [...prev.filter((i, index) => index !== id)];
    });
  }

  return (
    <div className="recipe-notes">
      <div className="notes">
        <div className="count">
          <Count
            count={
              notes.length === 0
                ? "No Notes to show"
                : `${notes.length} Notes`
            }
          />
        </div>

        <CreateArea className="form" onAdd={addNote} />
        {notes.map((n, index) => (
          <Note
            key={index}
            id={index}
            title={n.title}
            content={n.content}
            onDelete={deleteNotes}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeNotes;