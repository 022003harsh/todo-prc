import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Redux/Slices/Todoslice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (todo) => {
    dispatch(removeTodo({ id: todo.id }));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleRemove(todo)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;