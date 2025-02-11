import axios from "axios";
import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [newTask, setNewTask] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getTodos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
      );
      setTodos(data.slice(0, 20));
    } catch (err) {
      console.error("Failed to fetch todos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleCheck = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const newTodo: Todo = {
      userId: 1,
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setNewTask("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (category === "completed") return todo.completed;
    if (category === "pending") return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>To-Do List</h1>

      <div className="container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div className="container">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("completed")}>Completed</button>
        <button onClick={() => setCategory("pending")}>Pending</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {filteredTodos.map((todo) => (
            <li className="container bordering" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheck(todo.id)}
              />
              <span>{todo.id + " " + todo.title}</span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
