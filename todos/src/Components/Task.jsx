import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";
import DoneBtn from "./DoneBtn";

const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("");

  const category = props.category === "complited" ? "complited" : null;

  const handleOnchange = (e) => {
    setValue(e.target.value);
    
  };
  const handleOnBlur = () => {
    setEditMode(false)
    props.changeTask(value)
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
        setEditMode(false)
        props.changeTask(value)
    }
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
      <div
        className={`taskAndBtn ${category && "complited"} `}
        onDoubleClick={() => setEditMode(true)}
      >
        {props.task}
        <DeleteBtn deleteTask={props.deleteTask} />
      </div>
    </div>
  );
};

export default Task;
