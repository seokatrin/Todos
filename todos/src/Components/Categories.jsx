import React from "react";

const Categories = (props) => {
    const items = '1'
    return (
        <div className="categories">
            <p>{`${items} ${items > 1 ? 'items' : 'item'} left`}</p>
            <div>
                <span onClick={() => props.onClick('all')}>All</span>
                <span onClick={() => props.onClick('active')} >Active</span>
                <span onClick={() => props.onClick('complited')} >Completed</span>
            </div>
        </div>
    )
}

export default Categories