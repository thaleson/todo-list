import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Ícone de adicionar

interface AddTodoProps {
  addTodo: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">
        Adicionar
        <FaPlus style={{ marginLeft: '0.5rem' }} />
      </button>
    </form>
  );
};

export default AddTodo;
