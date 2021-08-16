import React from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            shoppingListItems: [],
            groceryItems: [
                { id: 1, title: "Melk", amount: 1 },
                { id: 2, title: "Brood", amount: 1 },
                { id: 3, title: "Kaas", amount: 1 },
                { id: 4, title: "Appels", amount: 1 },
            ],
        };
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClickGroceryItem(event) {
        const id = event.target.getAttribute("id") - 0;
        const groceryItem = this.state.groceryItems.filter(
            (item) => item.id === id
        );
        let shoppingListItemsIndex = this.state.shoppingListItems.indexOf(
            groceryItem[0]
        );
        if (shoppingListItemsIndex > -1) {
            let newState = [...this.state.shoppingListItems];
            newState[shoppingListItemsIndex].amount++;
            this.setState({
                shoppingListItems: newState,
            });
        } else {
            this.setState({
                shoppingListItems: [...this.state.shoppingListItems].concat(
                    groceryItem
                ),
            });
        }
    }

    emptyCart() {
        // dit is een ref, kan een probleem vormen, vandaar op 1 zetten bij leeghalen
        let newState = this.state.groceryItems.map((entry) => {
            entry.amount = 1;
            return entry;
        });
        this.setState({
            shoppingListItems: [],
            groceryItems: newState,
        });
    }

    handleSubmit(data) {
        data = data.trim();
        if (
            this.state.groceryItems.some((item) => item.title === data) ||
            data === ""
        ) {
            alert(`De grocery '${data}' bestaat al`);
        } else {
            const newId = this.getHighestId(this.state.groceryItems) + 1;
            const newGroceryItem = [{ id: newId, title: data, amount: 1 }];
            this.setState({
                groceryItems: [...this.state.groceryItems].concat(newGroceryItem),
            });
        }
    }

    getHighestId(itemsArr) {
        const reducer = (acc, item) => {
            const id = item.id;
            if (id > acc) {
                acc = id;
            }
            return acc;
        };
        return itemsArr.reduce(reducer, 0);
    }

    render() {
        return (
            <div className="Container">
                <GroceryList
                    handleSubmit={this.handleSubmit}
                    handleClickGroceryItem={this.handleClickGroceryItem}
                    items={this.state.groceryItems}
                    origin={"GroceryList"}
                />
                <ShoppingCart
                    emptyCart={this.emptyCart}
                    handleClickGroceryItem={this.handleClickGroceryItem}
                    items={this.state.shoppingListItems}
                    origin={"ShoppingCart"}
                />
            </div>
        );
    }
}

export default Container;