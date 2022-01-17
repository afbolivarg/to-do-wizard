import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Completed <b>{completedTodos} out of {totalTodos}</b> ToDos
    </h2>
  );
}

export { TodoCounter };