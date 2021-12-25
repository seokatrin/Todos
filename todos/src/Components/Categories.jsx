import React from "react";
import DeleteAllCompletedTaskBtn from "./DeleteAllCompletedTaskBtn";

const Categories = ({items, category, onClick, completedTaskCount, deleteAllCompletedTask}) => {
  // const items = props.items;
  const chosenCategory = category;

  let categories = ["all", "active", "complited"];
  categories = categories.map((category) => (
    <span
      key={category}
      onClick={() => onClick(category)}
      className={chosenCategory === category ? "active" : ""}
    >
      {category[0].toUpperCase() + category.slice(1)}
    </span>
  ));

  return (
    <div className="categories">
      <p>{`${items} ${items === 1 ? "item" : "items"} left`}</p>
      <div>
      {categories}
      </div>
      <DeleteAllCompletedTaskBtn completedTaskCount={completedTaskCount} deleteAllCompletedTask={deleteAllCompletedTask} />
    </div>
  );
};

export default Categories;
