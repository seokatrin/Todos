import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskInput = (props) => {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleOnKeyPress = (e) => {
    if (e.key == "Enter") {
      console.log(e.key);
    }
  };
  return (
    <div className="inputTask">
      <FontAwesomeIcon icon={faCheck} className="icon" />
      <Input
        value={value}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
    </div>
  );
};

export default TaskInput;

const Input = (props) => {
  return (
    <input
      placeholder="What needs to be done?"
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    />
  );
};
