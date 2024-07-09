import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          {task}
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
