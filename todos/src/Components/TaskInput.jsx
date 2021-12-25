import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskInput = (props) => {
  return (
    <div className="inputTask">
      <FontAwesomeIcon icon={faCheck} className="icon" />
      <Input />
    </div>
  );
};

export default TaskInput;

const Input = (props) => {
  return <input placeholder="What needs to be done?" />
}
