//Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const shoppingList = document.getElementById('shopping-list');
const itemInput = document.getElementById('item');
const addItemButton = document.getElementById('add-item-button');

//Create a function that will run in response to the button being clicked.
//Inside the function body, start off by storing the current value of the input element in a variable.
function addItem() {
    // Get the value of the input field and store it in a variable
    const newItem = itemInput.value.trim();

    // Empty the input field
    itemInput.value = '';

    // Create a new list item, span, and button element and store them in variables
    const li = document.createElement('li');
    const itemText = document.createElement('span');
    const deleteButton = document.createElement('button');

    // Set the text content of the span to the input element value and the text content of the button to 'Delete'
    itemText.textContent = newItem;
    deleteButton.textContent = 'Delete';

    // Append the span and button as children of the list item
    li.appendChild(itemText);
    li.appendChild(deleteButton);

    // Append the list item as a child of the list
    shoppingList.appendChild(li);

    // Attach an event handler to the delete button to remove the list item when clicked
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    // Focus the input element for entering the next shopping list item
    itemInput.focus();
}
addItemButton.addEventListener('click', addItem);

