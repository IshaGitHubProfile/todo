import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions'; 
import './list-style.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div className='lists'>
      {tasks.length > 0 && <h2>Tasks</h2>} 
      <ul className={`ul-list ${tasks.length > 0 ? 'border' : ''}`}>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <div className='left'>
              <p className='input-value'>{task.text}</p>
            </div>
            <div className='right'>
              <input
                className='ckh-box'
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p className='no-tasks'>No tasks, enjoy your day</p>} 
    </div>
  );
};

export default TaskList;
