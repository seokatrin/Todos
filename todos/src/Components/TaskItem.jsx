import React from "react";
import DeleteBtn from "./DeleteBtn";

const TaskItem = ({category, onDoubleClick, task, deleteTask}) => {
    return (
        <div
        className={`taskAndBtn ${category ? "complited" : ''} `}
        onDoubleClick={onDoubleClick}
      >
        {task}
        <DeleteBtn deleteTask={deleteTask} />
      </div>
    )
}

export default TaskItem