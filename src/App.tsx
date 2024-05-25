import React, { useState } from 'react';
import '../styles/App.css'
import logo from './assets/icons/Logo.svg'; // Adicione o logotipo desejado
import TodoList from './components/AddList/TodoList';
import AddTodo from './components/Addtodo/AddTodo';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1>Lista de Tarefas</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <div className="developer">
        Site desenvolvido em React por Thaleson Silva
      </div>
    </div>
  );
};

export default App;
