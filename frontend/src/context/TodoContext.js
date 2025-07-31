import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { todoService } from '../services/todoService';

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_TODOS':
      return { ...state, todos: action.payload, loading: false, error: null };
    case 'ADD_TODO':
      return { ...state, todos: [action.payload, ...state.todos] };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

const initialState = {
  todos: [],
  loading: false,
  error: null
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchTodos = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const todos = await todoService.getAllTodos();
      dispatch({ type: 'SET_TODOS', payload: todos });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const createTodo = async (todoData) => {
    try {
      const newTodo = await todoService.createTodo(todoData);
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      return newTodo;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  const updateTodo = async (id, todoData) => {
    try {
      const updatedTodo = await todoService.updateTodo(id, todoData);
      dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
      return updatedTodo;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoService.deleteTodo(id);
      dispatch({ type: 'DELETE_TODO', payload: id });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  const toggleTodo = async (id, completed) => {
    const todo = state.todos.find(t => t.id === id);
    if (todo) {
      await updateTodo(id, { ...todo, completed });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const value = {
    ...state,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    fetchTodos
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};