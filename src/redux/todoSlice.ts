import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
  id: Date;
  title: string;
  completed: boolean;
}[];
export const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as SliceState,
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
});

export default todoSlice.reducer;