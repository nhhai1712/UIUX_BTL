import React from "react";

const TaskPopup = ({ task, onClose }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>Task Details</h2>
        <div>
          <label>Title: </label>
          <span>{task.title}</span>
        </div>
        <div>
          <label>Description: </label>
          <span>{task.description}</span>
        </div>
        <div>
          <label>Status: </label>
          <span>{task.status}</span>
        </div>
        <div>
          <label>Assign To: </label>
          <span>{task.assignTo}</span>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TaskPopup;