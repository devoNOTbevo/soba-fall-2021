const button = document.getElementById('add-grocery-item-button');
button.addEventListener('click', () => {
  const inputValue = document.getElementById('grocery-item-input').value;
  const list = document.getElementById('grocery-list');
  const newListItem = document.createElement('li');
  newListItem.textContent = inputValue;
  list.appendChild(newListItem);
});
