const TaskList = ({ tasks, onToggleComplete, onRemoveTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(index)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
          </label>
          <button onClick={() => onRemoveTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList