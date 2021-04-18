import React from 'react';

type itemProps = {
  id: Date;
  title: string;
  completed: boolean;
};
export const TodoItem = ({id, title, completed}: itemProps) => {
  return (
    <>
      <li>
        <input type='checkbox' checked={completed}></input>
        {title}
      </li>
    </>
  );
};
