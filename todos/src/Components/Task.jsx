import React from "react";
import DeleteBtn from "./DeleteBtn";
import DoneBtn from "./DoneBtn";

const Task = (props) => {
    return (
        <div className="task">
            <DoneBtn />
            <div className="taskAndBtn">
            {props.task}
            <DeleteBtn />
            </div>
            
        </div>
    )
}

export default Task;