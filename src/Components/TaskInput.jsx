import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskInput = ({ addTask, tasks, toggleTaskCategory }) => {
  const isCompleted = tasks.every((task) => task.category === "complited");

  const [value, setValue] = useState("");
  const [completedTasks, setCompletedTasks] = useState(isCompleted);

  useEffect(() => {
    setCompletedTasks(isCompleted);
  }, [isCompleted]);

  const handleOnChange = (e) => {
      setValue(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key == "Enter") {
      if(value.trim().length === 0) return
      addTask(value);
      setValue("");
    }
  };

  const handleOnClick = () => {
    const category = completedTasks ? "active" : "complited";
    toggleTaskCategory(category);
  };

  return (
    <div className="inputTask">
      <FontAwesomeIcon
        onClick={handleOnClick}
        icon={faCheck}
        className={`icon ${completedTasks ? "iconActive" : ""}`}
      />
      <Input
        value={value}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
    </div>
  );
};

export default TaskInput;

const Input = ({ value, onChange, onKeyPress }) => {
  return (
    <input
      placeholder="What needs to be done?"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      type="text"
      maxLength={100}
    />
  );
};
