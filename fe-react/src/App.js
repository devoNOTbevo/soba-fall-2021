import './App.css';
import { useState, useEffect } from 'react';
import GroceryList from './grocery-list';
import axios from 'axios';

function App() {
  const [groceryList, setGroceryList] = useState([]);
  const [newItemInput, setNewItemInput] = useState('');

  const handleAddItem = () => {
    setGroceryList([...groceryList, newItemInput]);
    setNewItemInput('');
  };

  const handleInputChange = (value) => {
    setNewItemInput(value);
  };

  useEffect(() => {
    async function getGroceryItems() {
      const res = await axios.get('http://localhost:8005/groceries');
      const groceryList = res.data.groceries;
      setGroceryList(groceryList);
    }
    getGroceryItems();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery List</h1>
        <GroceryList listData={groceryList} />
        <input
          id="grocery-item-input"
          type="text"
          placeholder="type in a grocery item..."
          value={newItemInput}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button id="add-grocery-item-button" onClick={() => handleAddItem()}>
          Click to add item
        </button>
      </header>
    </div>
  );
}

export default App;
