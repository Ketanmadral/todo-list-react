import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Task({ task }) {
  const { deleteTask,checkTask } = useContext(GlobalContext);
  
  return (
    <div className="task">
      <input type="checkbox" checked={task.isChecked}  onChange={() => checkTask(task.id)} />
      <span className={task.isChecked ? "text" : undefined}>{task.text}</span>
      <span className="remove" onClick={() => deleteTask(task.id)}>
        X
      </span>
    </div>
  );
}

export default Task;
