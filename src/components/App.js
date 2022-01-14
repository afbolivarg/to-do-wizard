import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoWizardHeader } from './TodoWizardHeader';
import '../styles/App.css';

const todos = [
  { text: 'Cortar tomates', completed: true },
  { text: 'Cursos de programación', completed: false },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'Hacer almuerzo', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoWizardHeader />

      <TodoCounter />
      
      <main>
        <TodoSearch />

        <TodoList>
          {todos.map(todo => (
            <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
            ))}
        </TodoList>
s
        <CreateTodoButton />
      </main>
    </React.Fragment>
  )
}

export default App;
