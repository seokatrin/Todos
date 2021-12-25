import React from "react";
import DeleteBtn from "./DeleteBtn";
import DoneBtn from "./DoneBtn";

const Task = (props) => {
    const category = props.category === 'complited' ? 'complited' : null
    return (
        <div className="task">
            <DoneBtn completeTask={props.completeTask} category={props.category} />
            <div className={`taskAndBtn ${category && 'complited'} `}>
            {props.task}
            <DeleteBtn deleteTask={props.deleteTask} />
            </div>
        </div>
    )
}

export default Task;