import React from "react";
import "./InventoryItem.css";

function InventoryItem( { item }) {
    return (
        <div className="item">
            <h3>{item.name}</h3>
            <p>SKU: {item.sku}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
        </div>
    );
}
//function for each Inventory Item which takes the item prop and creates the html object
export default InventoryItem;