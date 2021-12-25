import React, { useState } from "react";
import DoneBtn from "./DoneBtn";
import TaskItem from "./TaskItem";

const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(props.task);

  const category = props.category === "complited" ? "complited" : null;

  const handleDblClick = () => {
    setEditMode(true);
  };

  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  const saveChangedTask = () => {
    setEditMode(false);
    if (value === "") {
      props.deleteTask();
    } else {
      props.changeTask(value);
    }
  };
  const handleOnBlur = () => {
    saveChangedTask()
  };

  const handleOnKeyPress = (e) => {
    saveChangedTask()
  };

  if (editMode) {
    return (
      <input
        className="changingInput"
        autoFocus={true}
        onBlur={handleOnBlur}
        onKeyPress={handleOnKeyPress}
        value={value}
        onChange={handleOnchange}
      />
    );
  }
  return (
    <div className="task">
      <DoneBtn completeTask={props.completeTask} category={category} />
      <TaskItem
        category={category}
        task={props.task}
        deleteTask={props.deleteTask}
        onDoubleClick={handleDblClick}
      />
    </div>
  );
};

export default Task;
