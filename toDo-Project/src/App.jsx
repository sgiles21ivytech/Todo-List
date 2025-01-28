import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (taskIndex) => {
    setTasks(
      tasks.map((task, index) =>
        index === taskIndex ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onRemoveTask={removeTask}
      />
    </div>
  );
};

export default App;
