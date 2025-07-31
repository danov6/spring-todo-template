import React from 'react';
import { useTodos } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  const handleToggle = async () => {
    try {
      await toggleTodo(todo.id, !todo.completed);
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        await deleteTodo(todo.id);
      } catch (error) {
        console.error('Failed to delete todo:', error);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="todo-item">
      <div className="todo-content">
        <h3 className={`todo-title ${todo.completed ? 'completed' : ''}`}>
          {todo.title}
        </h3>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
        <div className="todo-meta">
          Created: {formatDate(todo.createdAt)}
          {todo.updatedAt !== todo.createdAt && (
            <span> • Updated: {formatDate(todo.updatedAt)}</span>
          )}
        </div>
      </div>
      
      <div className="todo-actions">
        <button
          onClick={handleToggle}
          className={`btn ${todo.completed ? 'btn-primary' : 'btn-success'}`}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;