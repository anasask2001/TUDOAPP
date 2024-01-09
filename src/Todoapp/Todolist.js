import React, { useEffect, useState } from "react";
import Task from "./Addtask";
import Todo from "./Todo.css";
import List from "./Listtask";

const Todolist = () => {
  const [task, settask] = useState([]);
  useEffect(() => {
    document.title = `you have ${task.length} pending task(s)`;
  });
  const Addtask = (title) => {
    const newtask = [...task, { title }];
    settask(newtask);
  };
  const removetask = (index) => {
    const newtaskk = [...task];
    newtaskk.splice(index, 1);
    settask(newtaskk);
  };

  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">Add task</div>
        <Task Addtask={Addtask} />
        <div className="tasks">List Task : {task.length}</div>
        {task.map((task, index) => (
          <List task={task} removetask={removetask} index={index} key={index} />
        ))}
      </div>
    </>
  );
};

export default Todolist;
