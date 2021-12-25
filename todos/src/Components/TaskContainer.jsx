import React from "react";
import Task from "./Task";


const TaskContainer = (props) => {

    const category = props.category
    const tasks = props.tasks;
    const taskArr = category === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === category) 

    return (
        <>
            {taskArr.map(task => <div key={task.id}>
                <Task task={task.task} />
            </div>)}
        </>
    )
}

export default TaskContainer