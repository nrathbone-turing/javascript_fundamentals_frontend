# Lab: Event Listeners in JavaScript

## Introduction

As a new developer at a tech company, you are tasked with creating a dynamic user interface for a simple web application. You’ll add interactive features using event listeners to respond to user actions like clicking buttons and pressing keys. This is a common task in modern web development, where creating responsive and engaging interfaces is crucial.

## Challenge

1. Handle Button Clicks
2. Capture Keyboard Input
3. Process Text Input
4. Combine Multiple Events

## Bonus Challenge

5. Implement Additional Features

## Instructions

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Handle Button Clicks**
   - Create a function `changeBackgroundColor()` that changes the background color of the page when a button is clicked.
   - Reset the background color to white by building a function `resetBackgroundColor()` and attaching it to a double-click event.

3. **Capture Keyboard Input**
   - Build a function `displayKeyPress(event)` that updates a paragraph to display the key pressed by the user.
   - Attach the function to a keydown event listener on the document.

4. **Process Text Input**
   - Create a function `displayUserInput()` that shows real-time input in a paragraph as the user types into a text field.
   - Attach the function to the input event of a text field.

5. **Combine Multiple Events**
   - Develop a function that integrates button clicks, key presses, and text input to create more dynamic interactions on the page.
   - Apply event listeners to perform different tasks based on user interactions.

6. **BONUS CHALLENGE: Implement Additional Features**
   - Explore additional event types and integrate more complex interactivity.
   - Ensure the application responds smoothly to rapid user interactions.

## BONUS: Additional Event Handling

Handling additional user interactions can further enhance the user experience. Here are some ideas:

### `mouseover` and `mouseout`

Use `mouseover` and `mouseout` events to change element styles when hovering over them:

```js
someElement.addEventListener('mouseover', () => {
  someElement.style.backgroundColor = 'yellow';
});

someElement.addEventListener('mouseout', () => {
  someElement.style.backgroundColor = 'initial';
});
```

### `submit` Event

Handle form submissions to process user inputs:

```js
formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  // Process form data
});
```

## Resources

- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [Input Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- [Form Submission Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
