import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoWizardHeader } from '../TodoWizardHeader';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleCompleteTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoWizardHeader />

      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      
      <main>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
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
        <CreateTodoButton />
      </main>
    </React.Fragment>
  );
}

export { AppUI };