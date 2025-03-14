import './App.css'
import { useState , useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { increment  , decrement , incrementByAmount} from './utils/counterslice'
import { addTodo, toggleTodo, removeTodo, fetchTodos } from "./utils/todosSlice";
function App() {

const [input, setInput] = useState("");
const count = useSelector((store) => store.count.value)


  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);


  useEffect(() => {
    if (todos.length === 0) {
      dispatch(fetchTodos()); // Fetch todos on first load
    }
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
 
     <div>
      <h2> redux counter : {count}</h2>

      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>add 5</button>
     </div>

     <h2>Todo List (Redux Toolkit)</h2>


     <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task..." />
        <button type="submit">Add</button>
      </form>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => dispatch(
              (todo.id))}>{todo.completed ? "Undo" : "Complete"}</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
