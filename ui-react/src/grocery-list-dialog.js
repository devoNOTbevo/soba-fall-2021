import GroceryList from './grocery-list';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function GroceryListDialog() {
  const [groceryList, setGroceryList] = useState([]);
  const [newItemInput, setNewItemInput] = useState('');

  const handleAddItem = () => {
    setGroceryList([...groceryList, newItemInput]);
    setNewItemInput('');
  };

  const handleInputChange = (value) => {
    setNewItemInput(value);
  };
  return (
    <>
      <h1>Grocery List</h1>
      <GroceryList listData={groceryList} />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example input</Form.Label>
        <Form.Control type="text" placeholder="Normal text" />
      </Form.Group>
      <Button
        variant="success"
        id="add-grocery-item-button"
        onClick={() => handleAddItem()}
      >
        Click to add item
      </Button>
    </>
  );
}
