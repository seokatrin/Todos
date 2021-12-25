import React from "react";
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const DeleteBtn = (props) => {
    return (
        <div className="deletebtn" onClick={props.deleteTask}>
            <FontAwesomeIcon icon={faTimes} />
        </div>
    )
}

export default DeleteBtn;