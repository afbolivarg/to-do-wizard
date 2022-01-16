import React from "react";
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      <b>Progress:</b> {completed}/{total}
    </h2>
  );
}

export { TodoCounter };