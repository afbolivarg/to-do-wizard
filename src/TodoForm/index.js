import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
  const [newTodoText, setNewTodoText] = React.useState('');
  const [emptyTodo, setEmptyTodo] = React.useState(false);
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoText(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoText === '') {
      setEmptyTodo(true);
      return
    }
    addTodo(newTodoText);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label className='sub-title'>New ToDo</label>
      {!!emptyTodo && (
        <p className='alert'>Can't add empty ToDo</p>
      )}
      <textarea className='text-new-todo'
        value={newTodoText}
        onChange={onChange}
        placeholder='Your task'
      />
      <div className='form-btn-container'>
        <button
          type='button'
          onClick={onCancel}
          className='cancel-btn'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='add-btn'
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };