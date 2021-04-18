import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type todoProps = {
  id: Date;
  title: string;
  completed: boolean;
}[];

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async() => {
    const resp = await fetch('http://localhost:7000/todos');
    if (resp.ok) {
      const todos: todoProps = await resp.json();
      return { todos };
    }
  }
);

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as todoProps,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosAsync.fulfilled, (state, action) => {
      return action.payload?.todos;
    })
  },
});

export default todoSlice.reducer;