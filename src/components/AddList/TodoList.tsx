import React from 'react';
import TodoItem from '../Additem/TodoItem';
import { FaClipboardCheck } from 'react-icons/fa'; // Ícone de prancheta com check

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-list">
      <div className="todo-counter">
        <p>
          Tarefas criadas: <span>{totalTasks}</span>
        </p>
        <p>
          Tarefas concluídas: <span>{completedTasks}</span>
        </p>
      </div>
      {todos.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <FaClipboardCheck size={50} style={{ opacity: 0.5 }} />
          <p>Nenhuma tarefa adicionada</p>
        </div>
      ) : (
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
