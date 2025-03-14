import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


// Async thunk to fetch initial todos from an API
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  return response.json();
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: JSON.parse(localStorage.getItem("todos")) || [], // Load from local storage
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload, completed: false });
      localStorage.setItem("todos", JSON.stringify(state.list)); // Save to local storage
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.list)); // Save to local storage
      }
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.list)); // Save to local storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload.map((t) => ({ id: t.id, text: t.title, completed: t.completed }));
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
