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
            {taskArr && taskArr.map(task => <div key={task.id}>
                <Task task={task.task} deleteTask={() => props.deleteTask(task.id)} />
            </div>)}
        </>
    )
}

export default TaskContainer