import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id, updatedTask) => {
    dispatch(editTask(id, updatedTask));
  };

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          {task.text}
          <div>
            <button className="btn btn-warning btn-sm me-2" onClick={() => {
              const updatedTask = prompt("Edit task:", task.text);
              if (updatedTask) handleEditTask(task.id, updatedTask);
            }}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
