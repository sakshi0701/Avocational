import React from "react";
import "./notes.css";

function count({ count }) {
  return (
    <div className="count">
      <h3>{count}</h3>
    </div>
  );
}

export default count;
