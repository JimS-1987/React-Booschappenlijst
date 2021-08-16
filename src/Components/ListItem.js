
import React from "react";

function GroceryItems(props) {
    return (
        <li
            id={props.item.id}
            title={props.item.title}
            onClick={props.handleClickGroceryItem}
            className="list-item-grocery"
        >
            {props.item.title}
        </li>
    );
}

function ShoppingCartItems(props) {
    return (
        <li id={props.item.id} title={props.item.title} className="list-item-shopping">
            {props.item.title} &nbsp;&nbsp;&nbsp;&nbsp; Aantal: {props.item.amount}
        </li>
    );
}

function ListItem(props) {
    return props.origin === "GroceryList" ? (
        <GroceryItems {...props} />
    ) : (
        <ShoppingCartItems {...props} />
    );
}

export default ListItem;
