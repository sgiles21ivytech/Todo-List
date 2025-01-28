import { useState } from "react";


const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText !== "") {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput