import React from "react";

const DeleteAllCompletedTaskBtn = ({
  completedTaskCount,
  deleteAllCompletedTask,
}) => {
  return (
    <div
      onClick={deleteAllCompletedTask}
      className={`deleteCompletedBtn ${
        completedTaskCount > 0 ? "" : "invisible"
      }`}
    >
      Clear Completed
    </div>
  );
};

export default DeleteAllCompletedTaskBtn;
