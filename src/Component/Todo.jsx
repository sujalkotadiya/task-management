import React, { useState, useEffect } from 'react';
import Todo from './Todo'; 
import TodoForm from './TodoForm'; 

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (task, user) => {
    const newTodo = { task, user, id: Date.now() };
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = (id, updatedTask, updatedUser) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, task: updatedTask, user: updatedUser } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            user={todo.user}
            onUpdate={(updatedTask, updatedUser) => handleUpdateTodo(todo.id, updatedTask, updatedUser)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
