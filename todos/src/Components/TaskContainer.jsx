import React from "react";
import Task from "./Task";

const TaskContainer = (props) => {
  const category = props.category;
  const tasks = props.tasks;
  const taskArr =
    category === "all"
      ? tasks
      : tasks.filter((task) => task.category === category);

  return (
    <>
      {taskArr &&
        taskArr.map((task) => (
          <div key={task.id}>
            <Task
              task={task.task}
              category={task.category}
              deleteTask={() => props.deleteTask(task.id)}
              completeTask={() => props.completeTask(task.id)}
              changeTask={(taskToChange) => props.changeTask(task.id, taskToChange)}
            />
          </div>
        ))}
    </>
  );
};

export default TaskContainer;
