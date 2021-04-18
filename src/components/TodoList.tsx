import React, { useEffect } from 'react';
import { TodoItem } from './TodoItem';
import { getTodosAsync } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};
