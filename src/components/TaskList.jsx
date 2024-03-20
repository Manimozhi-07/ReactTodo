import React from "react";
export default function TaskList({
  task,
  isChecked,
  lineThrough,
  editTask,
  deleteTask,
}) {
  return (
    <div id="taskListCont">
      <ul>
        {task.length > 0 &&
          task.map((t) => (
            <li key={t} id={t}>
              <div id="value">
                <input type="checkbox" onChange={(e) => lineThrough(e, t)} />
                <span className={isChecked[t] ? "check" : ""}>{t}</span>
              </div>
              <div id="btnCont">
                <button
                  type="button"
                  id="edit"
                  onClick={() => editTask(t)}
                  disabled={isChecked[t]}
                >
                  Edit
                </button>
                <button type="button" id="delete" onClick={() => deleteTask(t)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
