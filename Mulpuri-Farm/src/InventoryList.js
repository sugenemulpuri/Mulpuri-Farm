import React from "react";
import InventoryItem from "./InventoryItem";
import "./InventoryList.css";


function InventoryList( {items} ) {
    return (
        <div className="InventoryList">
            {items.map((item) => (
                <InventoryItem item={item} />
            ))}
        </div>
    );
}

//function that takes the items prop and maps each item from the InventoryItem component

export default InventoryList;
