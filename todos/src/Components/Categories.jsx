import React from "react";

const Categories = (props) => {
    const items = '1'
    return (
        <div className="categories">
            <p>{`${items} ${items > 1 ? 'items' : 'item'} left`}</p>
            <div>
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
            </div>
        </div>
    )
}

export default Categories