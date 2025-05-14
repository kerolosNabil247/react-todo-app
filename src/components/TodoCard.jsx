import React from "react";

export default function TodoCard({ task, onDelete, onComolete }) {
  // const handleClick = () => {
  //     OnDelete(task.id)
  // }
  return (
    <>
      <div className={"card col-10 mb-2 " + (task.completed? "bg-secondary border-success" : "border-secondary")}>
        <div className={"card-body " }>
          <p
            className={
              task.completed ? "text-decoration-line-through text-white" : "card-text"
            }
          >
            {task.text}
          </p>
          <button
            className="btn btn-danger"
            onClick={() => {
              onDelete(task.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              onComolete(task.id);
            }}
            className={
              "ms-2 btn " + (task.completed 
                ? "btn-success" 
                : "btn-secondary ")
            }>
            {task.completed? "Reopen" : "Completed"}
          </button>
        </div>
      </div>
    </>
  );
}
