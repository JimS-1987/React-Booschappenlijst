import React from "react";
import ListItem from "./ListItem";

function List(props) {
    const listItems = props.items.map((item) => {
        return (
            <ListItem
                key={item.id}
                item={item}
                handleClickGroceryItem={props.handleClickGroceryItem}
                origin={props.origin}
            />
        );
    });
    return (
        <ul className="List">
            {listItems}
        </ul>
    );
}

export default List;

