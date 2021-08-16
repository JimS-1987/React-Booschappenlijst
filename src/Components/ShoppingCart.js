
import React from "react";
import List from "./List";

function ShoppingCart(props) {
    return (
        <div className="ShoppingCart">
            <h1>Shopping Cart</h1>
            <List {...props} />
            <button className="emptyButton" onClick={props.emptyCart}>
                Empty Cart
            </button>
            
        </div>
    );
}

export default ShoppingCart;