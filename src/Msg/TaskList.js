import React from "react";
import Task from "./Task";

export default function TaskList({ tasks = [] }) {
  if (tasks.length == 0) return <div>目前沒有待辦...</div>;

  return (
    <div>
      {tasks.map((task, i) => (
        <Task key={task.id} {...task} i={i} />
      ))}
    </div>
  );
}
