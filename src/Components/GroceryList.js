
import React from "react";
import List from "./List";
import InputField from "./InputField";

function GroceryList(props) {
    return (
        <div className="GroceryList">
            <h1>Grocery List</h1>
            <InputField handleSubmit={props.handleSubmit} />
            <List {...props} />
        </div>
    );
}

export default GroceryList;