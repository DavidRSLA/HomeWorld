import React, { useState } from "react";
import "./App.css";

function TaskList({
  tasks,
  toggleTaskStatus,
  deleteTask,
  addFileToTask,
  removeFileFromTask,
}) {
  const [selectedTaskFile, setSelectedTaskFile] = useState(null);

  const handleFileClick = (file) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);

      if (file.type.startsWith("image/") || file.type === "application/pdf") {
        setSelectedTaskFile({ url: fileURL, name: file.name });
      } else {
        alert(
          "Este archivo no es soportado para vista previa. Puedes descargarlo."
        );
        window.open(fileURL, "_blank");
      }
    }
  };

  const handleDownload = (file) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = file.name;
      link.click();
      URL.revokeObjectURL(fileURL);
    }
  };

  const handleRemoveFile = (taskId) => {
    removeFileFromTask(taskId);
    setSelectedTaskFile(null);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task ${task.completed ? "completed" : ""}`}
        >
          <div className="task-info">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Fecha de vencimiento: {task.dueDate}</p>
            <p>Hora: {task.dueTime}</p>
          </div>
          <div className="task-actions">
            <button
              className="btn-submit"
              onClick={() => toggleTaskStatus(task.id)}
            >
              {task.completed
                ? "Desmarcar como completada"
                : "Marcar como completada"}
            </button>
            <button
              className="btn-delete"
              onClick={() => deleteTask(task.id)}
            >
              Eliminar
            </button>

            {!task.file ? (
              <label>
                Subir archivo
                <input
                  type="file"
                  onChange={(e) => addFileToTask(task.id, e.target.files[0])}
                />
              </label>
            ) : (
              <div>
                <p>Archivo: {task.file.name}</p>
                <button
                  className="btn-download"
                  onClick={() => handleFileClick(task.file)}
                >
                  Ver
                </button>
                <button
                  className="btn-download"
                  onClick={() => handleDownload(task.file)}
                >
                  Descargar
                </button>
                <button
                  className="btn-remove-file"
                  onClick={() => handleRemoveFile(task.id)}
                >
                  Quitar archivo
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {selectedTaskFile && (
        <div className="file-preview">
          <h4>Vista previa de archivo: {selectedTaskFile.name}</h4>
          {selectedTaskFile.url && selectedTaskFile.name.endsWith(".pdf") ? (
            <embed src={selectedTaskFile.url} width="100%" height="500px" />
          ) : selectedTaskFile.url &&
            selectedTaskFile.url.startsWith("blob:image/") ? (
            <img src={selectedTaskFile.url} alt={selectedTaskFile.name} />
          ) : (
            <p>El archivo seleccionado no es soportado para vista previa.</p>
          )}
          <button
            className="btn-delete"
            onClick={() => setSelectedTaskFile(null)}
          >
            Cerrar vista previa
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskList;
