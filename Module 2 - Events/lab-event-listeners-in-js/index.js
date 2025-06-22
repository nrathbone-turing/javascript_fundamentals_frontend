// Handle Button Clicks

// Function to change the background color when a button is clicked

function changeBackgroundColor() {
    // array of colors to pick from when changing the background color
    const colors = ["red", "blue", "green", "purple", "orange", "pink"];
    // generating random colors from the array above
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const body = document.querySelector("body");

    body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the reset button is double-clicked
function resetBackgroundColor() {
    const body = document.querySelector("body");
    
    body.style.backgroundColor = "white";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
    const keyPressDisplay = document.getElementById("keyPressDisplay");

    keyPressDisplay.textContent = `You typed the letter ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
    const textInput = document.querySelector("#textInput");
    const textInputDisplay = document.getElementById("textInputDisplay");

    textInputDisplay.textContent = textInput.value;
}

// Export for testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
}