import { useState } from 'react';
import { useTodos } from '../hooks/useTodos';

export default function TodoList() {
  const { todos, toggleTodo, deleteTodo, updateTodo } = useTodos();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const handleUpdate = (id: number) => {
    updateTodo(id, editText);
    setEditingId(null);
    setEditText('');
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
          )}
          <div>
            {editingId === todo.id ? (
              <button onClick={() => handleUpdate(todo.id)}>Save</button>
            ) : (
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}