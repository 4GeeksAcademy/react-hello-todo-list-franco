import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Añadir nueva tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskInput;
