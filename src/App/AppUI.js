import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoWizardHeader } from '../TodoWizardHeader';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoEmpty } from '../TodoEmpty';

function AppUI() {
  const { 
    loading, 
    error, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoWizardHeader />
      <TodoCounter />
      <main>
        <TodoSearch />
        <TodoList>
          {loading && <p>Estamos cargando...</p>}
          {error && <p>Hubo un error...</p>}
          {(!loading && !searchedTodos.length) && <TodoEmpty />}

          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

      </main>
        <CreateTodoButton
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
    </React.Fragment>
  );
}

export { AppUI };