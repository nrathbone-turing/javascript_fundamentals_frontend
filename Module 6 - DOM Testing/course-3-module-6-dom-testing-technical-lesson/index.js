// Select the button element for adding new items
// - This will allow us to attach an event listener for user interaction.

// Select the button and list elements we want to manipulate in the DOM.
const button = document.getElementById("add-item");
const list = document.getElementById("item-list");

// Define the function to add a new list item
// - Select the unordered list (<ul>) where the item will be added.
// - Create a new list item (<li>) dynamically.
// - Set the text content of the new list item to "New Item".
// - Append the new list item to the unordered list.

// Create a function to dynamically add a list item.
function addItem() {
    const newItem = document.createElement("li");
    
    newItem.textContent = "New Item";
    list.appendChild(newItem);
}

// Attach an event listener to the button
// - On button click, call the function to add a new item to the list.

// Add an event listener to the button to call the function when clicked.
button.addEventListener("click", addItem);

