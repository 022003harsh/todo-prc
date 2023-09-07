import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Slices/Todoslice';

function TodoInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: input }));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new item"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoInput;