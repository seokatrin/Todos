import React from "react";
import './styles.css'
import done_icon from './../images/check2.svg'

const DoneBtn = (props) => {
    
    return (
        <div className='doneBtn' onClick={props.completeTask}>
            {props.category && <img className="doneIcon" src={done_icon} />}
        </div>
    )
}

export default DoneBtn