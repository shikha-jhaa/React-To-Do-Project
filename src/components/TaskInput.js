import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
