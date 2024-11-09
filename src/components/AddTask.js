import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTask() {
  const [text, setText] = useState("");
  const { tasks, addTask } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      const task = {
        id: tasks.length + 1,
        text,
        isChecked: false,
      };
      addTask(task);
      setText(" ");
    }

  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="new-task">
          <h2>New Task</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <hr />

          <button>ADD</button>
        </div>
      </form>
    </>
  );
}

export default AddTask;
