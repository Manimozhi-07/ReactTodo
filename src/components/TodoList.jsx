import React, { useState, useRef } from "react";
import "./TodoList.css";
export default function TodoList() {
  const [value, setValue] = useState(" ");
  const [task, setTask] = useState([]);
  const [isChecked, setIsChecked] = useState({});
  //   const taskRef = useRef();
  const getInput = () => {
    console.log(value);
    if (value !== " ") {
      setTask((prev) => [...prev, value]);
      setValue(" ");
    }
  };
  const deleteTask = (taskk) => {
    // var index = task.indexOf(taskk);
    // task.splice(index, 1);
    var delTask = task.filter((t) => t !== taskk);
    console.log(delTask);
    setTask([...delTask]);
  };
  const editTask = (t) => {
    var editTask = task.filter((ta) => ta !== t);

    setTask([...editTask]);
    setValue(t);
  };

  const lineThrough = (e, t) => {
    console.log(t, e.target.checked);
    setIsChecked((prev) => ({ ...prev, [t]: e.target.checked }));
  };
  console.log("Task", task);
  console.log(isChecked);
  return (
    <>
      <div className="todoListContainer">
        <div id="taskCont">
          <input
            type="text"
            id="inputCont"
            placeholder="Enter Task"
            // ref={taskRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="button" id="add" onClick={() => getInput()}>
            Add
          </button>
        </div>
        <div id="taskListCont">
          <ul>
            {task.length > 0 &&
              task.map((t) => (
                <li key={t} id={t}>
                  <div id="value">
                    <input
                      type="checkbox"
                      onChange={(e) => lineThrough(e, t)}
                    />
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
                    <button
                      type="button"
                      id="delete"
                      onClick={() => deleteTask(t)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
