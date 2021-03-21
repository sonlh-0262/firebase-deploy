import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React', isCompleted: false },
    { text: 'Meet friend for lunch', isCompleted: false },
    { text: 'Build really cool todo app', isCompleted: false }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = todos.map((todo, _index) => {
      if(_index === index) return { ...todo, isCompleted: true }
      return todo;
    });
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, _index) => {
      return _index !== index
    });
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        { todos.map(( todo, index ) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <TodoForm
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}

export default App;
