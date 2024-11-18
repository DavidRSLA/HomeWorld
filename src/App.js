import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./App.css";

function App() {
  // Cargar las tareas del localStorage, o un array vacío si no hay tareas guardadas
  const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasks); // Usamos la función loadTasks para inicializar el estado

  useEffect(() => {
    // Guardar las tareas en el localStorage cada vez que se actualicen
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Se ejecuta cada vez que tasks cambia

  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addFileToTask = (taskId, file) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, file: file } : task
      )
    );
  };

  const removeFileFromTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, file: null, completed: false } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>HomeWorld - Gestor de Tareas</h1>
      <TaskForm addTask={addTask} />

      {/* Filtro de tareas */}
      <div className="task-filter">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="pending">Pendientes</option>
        </select>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
        addFileToTask={addFileToTask}
        removeFileFromTask={removeFileFromTask}
      />
    </div>
  );
}

export default App;
