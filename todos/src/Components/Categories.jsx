import React from "react";

const Categories = (props) => {
  const items = props.items;
  const chosenCategory = props.category;

  let categories = ["all", "active", "complited"];
  categories = categories.map((category) => (
    <span
      key={category}
      onClick={() => props.onClick(category)}
      className={chosenCategory === category ? "active" : ""}
    >
      {category[0].toUpperCase() + category.slice(1)}
    </span>
  ));

  return (
    <div className="categories">
      <p>{`${items} ${items === 1 ? "item" : "items"} left`}</p>
      {categories}
    </div>
  );
};

export default Categories;
