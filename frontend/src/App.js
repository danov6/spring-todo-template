import React from 'react';
import { useTodos } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const { error } = useTodos();

  return (
    <div className="container">
      <div className="header">
        <h1>Todo App</h1>
        <p>Manage your tasks efficiently</p>
      </div>
      
      {error && (
        <div className="error">
          Error: {error}
        </div>
      )}
      
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;