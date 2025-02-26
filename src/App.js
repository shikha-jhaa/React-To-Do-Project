import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
