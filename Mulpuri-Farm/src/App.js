import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import InventoryList from "./InventoryList";

function App() {

  const [inventory, setInventory] = useState([]);
  //data is assigned to inventory and setInventory function updates it to be used

  useEffect(() => {
    fetch("./data/inventory.json")
    .then((res) => res.json())
    .then((data) => setInventory(data))
    .catch((err) => console.error("Failed to load inventory", err));
  }, []);

  //data is fetched and fed to setInventory to use in app


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mulpuri Farm
        </p>
      </header>
      <div className="App-body">
      <h1>
        What We Have in Stock
      </h1>
      <div className="Inventory-section"><InventoryList items={inventory} /></div>
      </div>
      <footer className="App-footer">
&copy; 2025. Mulpuri Farm.
      </footer>
    </div>
  );
}
//front-end featuring header logo and title, what the farm has in stock with items populated, and footer indicating trademark

export default App;