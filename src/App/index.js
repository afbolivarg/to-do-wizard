import React from "react";
import { AppUI } from './AppUI';
import './App.css';

// const defaulTodos = [
//   { text: 'Cortar tomates', completed: false },
//   { text: 'Cursos de programación', completed: false },
//   { text: 'Hacer ejercicio', completed: true },
//   { text: 'Hacer almuerzo', completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }) 
  }

  const saveTodos = (newTodos) => {
    const stringTodo = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringTodo);
    setTodos(newTodos);
  };

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    if (!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true
    } else {
      newTodos[todoIndex].completed = false
    };
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };


  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
