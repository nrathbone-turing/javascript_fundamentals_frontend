// - Add event listeners for button clicks and form submissions.
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("simulate-click");
    const form = document.getElementById("user-form");
    
    if (button) {
        button.addEventListener("click", simulateClick);
    }

    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
});

// - Use JavaScript to dynamically update the DOM based on user actions.
function simulateClick() {
    // dynamicContent.textContent = "Button was clicked!" // for initial testing
    addElementToDOM("dynamic-content", "Button Clicked!");
}

function handleFormSubmit() {
    
    const input = document.getElementById("user-input").value.trim(); 
    // - Display error messages in the DOM for invalid inputs or missing elements.
    // - Create reusable functions to handle common error cases.
    const errorMessage = document.getElementById("error-message");
    
    if (!input) {
        errorMessage.textContent = "Input cannot be empty";
        errorMessage.classList.remove("hidden");
        return;
    }
    // dynamicContent.textContent = "Form submitted!" // for initial testing
    addElementToDOM("dynamic-content", input);
    errorMessage.classList.add("hidden");
}
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function addElementToDOM(elementId, content) {
    const element = document.getElementById(elementId);

    if (element) {
        element.textContent = content;
    }
}

function removeElementFromDOM(elementID) {
    const element = document.getElementById(elementID);

    if (element) {
        element.remove();
    }
}

// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.


module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
}