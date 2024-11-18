import React, { useState } from "react";
import "./App.css";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({
        id: Date.now(),
        title,
        description,
        dueDate,
        dueTime,
        completed: false,
        file: null,
      });
      setTitle("");
      setDescription("");
      setDueDate("");
      setDueTime("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la tarea"
          required
        />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la tarea"
        ></textarea>
      </div>
      <div className="form-group">
        <label>Fecha de vencimiento:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Hora de vencimiento:</label>
        <input
          type="time"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-submit">
        Crear Tarea
      </button>
    </form>
  );
};

export default TaskForm;