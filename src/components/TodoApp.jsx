import React, { useState } from "react";
import "./TodoList.css";

export default function TodoApp({ onAddClick }) {
  const [taskData, setTaskData] = useState("");

  const handleClick = () => {
    if(taskData.trim() !== ''){
        onAddClick(taskData);
        setTaskData('');
    }
  };

  return (
    <div className="custom-child1-bg m-2 text-white">
      <div className="row m-1 justify-content-center">
        <h1 className="col-9 text-end">
          <b>To-Do App!</b>
        </h1>
      </div>
      <div className="row m-1 justify-content-center">
        <samp className="col-9 text-end">
          <b>Add New To-Do</b>
        </samp>
      </div>
      <div className="row m-1 justify-content-start">
        {/* here handle the input of the user to textbox */}
        <input
          type="text"
          placeholder="Enter New Task"
          className="col-10 border-0 ms-3"
          value={taskData}
          onChange={(e) => {setTaskData(e.target.value)} }
        />
      </div>
      <div className="row m-1 justify-content-center">
        <div className="col-10 text-end mb-5 mt-3">
          {/* here handle the add click to send the data to parent component */}
          <button
            className="btn border border-white text-white"
            onClick={handleClick}
          >
            <b>Add</b>
          </button>
        </div>
      </div>
    </div>
  );
}
