import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
  const toggleModal = (msg) => {
    if (!props.openModal) {
      props.setOpenModal(true);
    } else {
      props.setOpenModal(false);
    }
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={toggleModal}
    >
      +
    </button>
  );
}

export { CreateTodoButton };