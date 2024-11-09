import React, { useContext } from "react";
import Task from "./Task";
import { GlobalContext } from "../context/GlobalState";

function TaskList() {
  const { tasks } = useContext(GlobalContext);
  return (
    <>
      <div className="task-list">
        <h2>Tasks</h2>
        {tasks.map(task => (
          <Task key={task.id} task={task}/>
        ))}
      </div>
    </>
  );
}

export default TaskList;
