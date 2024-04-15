import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './input.css';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    dispatch(addTask(taskText));
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input-list'
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Add a new task..."
      />
      <button className="btn" type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
