// Select the dodger element for manipulation
// Use document.getElementById to select the element with id "dodger"
const dodger = document.getElementById("dodger");
// Force inline values in the javascript to make it script-editable since otherwise it returns NaN if just using the css initial position
dodger.style.left = "180px";
dodger.style.bottom = "180px";

// Function to move the dodger left
// Convert the current left position from a string to an integer
// Ensure the dodger doesn't move off-screen
// Update the left position of the dodger
function moveDodgerLeft() {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);

        if (left > 0) { // Prevent moving off-screen
            dodger.style.left = `${left - 10}px`;
        }

        console.log("Moving left to:", dodger.style.left);

       }

// Function to move the dodger right
// Convert the current left position from a string to an integer
// Ensure the dodger doesn't move off-screen
// Update the left position of the dodger
function moveDodgerRight() {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);

        if (left < 360) { // Prevent moving off-screen
            dodger.style.left = `${left + 10}px`;
        }

        console.log("Moving right to:", dodger.style.left);

       }

// Attach event listener to respond to key presses
// Use document.addEventListener to listen for "keydown" events
// document.addEventListener("keydown", function (event) {
//         console.log(event.key); // Logs the key pressed
        
//         if (event.key === "ArrowLeft") {
//             moveDodgerLeft();
//         } else if (event.key === "ArrowRight") {
//             moveDodgerRight();
//         } else if (event.key === "ArrowUp") {
//             moveDodgerUp();
//         } else if (event.key === "ArrowDown") {
//             moveDodgerDown();
//         }
//        });

// Inside the event listener, call moveDodgerLeft if the left arrow key is pressed
// Call moveDodgerRight if the right arrow key is pressed

// Add functions to move dodger up and down (using/changing `bottom` position instead of `left`)
function moveDodgerDown() {
        const bottomNumbers = dodger.style.bottom.replace("px", "");
        const bottom = parseInt(bottomNumbers, 10);

        if (bottom > 0) { // Prevent moving off-screen at the bottom
            dodger.style.bottom = `${bottom - 10}px`;
        }

        console.log("Moving down to:", dodger.style.bottom);

       }

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 360) { // Prevent moving off-screen at the top
        dodger.style.bottom = `${bottom + 10}px`;
    }

    console.log("Moving up to:", dodger.style.bottom);

}

// Refactoring functionality to allow for the dodger to gain speed if a directional key is held down
// This would replace the previous `keydown` event listener
let moveInterval = null; // Prevent multiple intervals if held

document.addEventListener("keydown", function (event) {
    if (moveInterval) return;

    if (event.key === "ArrowLeft") {
        moveInterval = setInterval(moveDodgerLeft, 20);
    } else if (event.key === "ArrowRight") {
        moveInterval = setInterval(moveDodgerRight, 20);
    } else if (event.key === "ArrowUp") {
        moveInterval = setInterval(moveDodgerUp, 20);
    } else if (event.key === "ArrowDown") {
        moveInterval = setInterval(moveDodgerDown, 20);
    }
});

// clear the interval when the key is released via `keyup`
document.addEventListener("keyup", function () {
    clearInterval(moveInterval);
    moveInterval = null;
});


