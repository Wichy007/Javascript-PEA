import TodoProvider from './context/TodoProvider';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

export default function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
