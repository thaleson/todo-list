import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Ícone de lixeira

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>
        <FaTrash />
      </button>
    </li>
  );
};

export default TodoItem;
