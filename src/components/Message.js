import React, { useState } from "react";
import TaskList from "../Msg/TaskList";
import AddTaskForm from "../Msg/AddMsgForm";
import { v4 } from "uuid";

const tasksData = [
  { id: "1000001", todo: "Good!" }
];

export default function Message() {
  const [tasks, setTasks] = useState(tasksData);
  return (
    <>
      <TaskList
        tasks={tasks}
        onChangeStatus={(id, status) => {
          const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, status } : task));
          setTasks(updatedTasks);
        }}
      />
      <AddTaskForm 
        onNewTask={(content) => {
          const updatedTasks = [...tasks, { id: v4(), status: "stop", todo: content }];
          setTasks(updatedTasks);
        }}
      />
    </>
  );
}
