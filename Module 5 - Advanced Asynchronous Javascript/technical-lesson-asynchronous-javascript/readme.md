  

# Technical Lesson: Asynchronous JavaScript

  

## Overview

  

**Scenario:**

You are a developer working on a user management tool for a company. The tool needs to fetch user data from an API and display it dynamically on a web page. Additionally, you need to ensure the app can handle errors gracefully and provide a seamless user experience.

  

**Estimated Completion Time:**

30-60 minutes

  

---

  

## Instructions

  

### 1. Fork and Clone the Repository

- Go to the provided GitHub repository link.

-  **Fork the repository** to your GitHub account.

-  **Clone the forked repository** to your local machine.

- Open the project in **VSCode**.


  

---

  

### 2. Set Up the HTML File

- Use the provided `index.html` file to set up the structure for displaying user data dynamically.

  

```html

<!DOCTYPE  html>

<html  lang="en">

<head>

<meta  charset="UTF-8">

<meta  name="viewport"  content="width=device-width, initial-scale=1.0">

<title>Asynchronous JavaScript Lesson</title>

</head>

<body>

<h1>Asynchronous JavaScript Lesson</h1>

<h2>User List</h2>

<ul  id="user-list"></ul>

<script  src="index.js"></script>

</body>

</html>

```

  

---

  

### 3. Fetch Data from an API

- Use the Fetch API to make a GET request to the `JSONPlaceholder` API.

  

```javascript

fetch('https://jsonplaceholder.typicode.com/users')

.then(response => response.json())

.then(users => {

console.log(users); // Log the user data to check the API response

})

.catch(error => {

console.error('Error fetching user data:', error);

});

```

  

---

  

### 4. Display User Data

- Write a function to dynamically display the fetched user data on the web page.

  

```javascript

function displayUsers(users) {

const userList = document.querySelector('#user-list');

users.forEach(user => {

const listItem = document.createElement('li');

listItem.textContent = `${user.name} (${user.email})`;

userList.appendChild(listItem);

});

}

```

  

- Update the fetch request to call `displayUsers`:

  

```javascript

fetch('https://jsonplaceholder.typicode.com/users')

.then(response => response.json())

.then(users => {

displayUsers(users);

})

.catch(error => {

console.error('Error fetching user data:', error);

});

```

  

---

  

### 5. Refactor with Async/Await

- Refactor the Fetch API logic using `async/await` for improved readability.

  

```javascript

async function fetchAndDisplayUsers() {

try {

const response = await fetch('https://jsonplaceholder.typicode.com/users');

const users = await response.json();

displayUsers(users);

} catch (error) {

console.error('Error fetching user data:', error);

}

}

  

// Call the function

fetchAndDisplayUsers();

```

  

---

  

### 6. Add Error Handling

- Update the error handling logic to display a message on the webpage when there is an error.

  

```javascript

async function fetchAndDisplayUsers() {

try {

const response = await fetch('https://jsonplaceholder.typicode.com/users');

const users = await response.json();

displayUsers(users);

} catch (error) {

const userList = document.querySelector('#user-list');

const errorMessage = document.createElement('li');

errorMessage.textContent = 'Failed to load user data. Please try again later.';

userList.appendChild(errorMessage);

console.error('Error fetching user data:', error);

}

}

```

  

---

  

### 7. Test and Debug

- Run the application in your browser by opening `index.html`.

- Check the Developer Console for errors or logs.

- Confirm that the user list is displayed correctly and that error messages appear when there’s a problem with the API request.

  

---

  

## Considerations

  

### Common Issues

1.  **Network Errors**:

Ensure you have an active internet connection. Test error handling by using an invalid API URL.

2.  **Cross-Origin Resource Sharing (CORS)**:

If you encounter CORS errors, check the API's compatibility or use a CORS proxy.

  

3.  **Dynamic Element Creation**:

Forgetting to append elements to the DOM can lead to data not being displayed.

  

---

  

## Final Code

  

Here’s the complete code:

  

```javascript

// Fetch and display users from the API

async function fetchAndDisplayUsers() {

try {

const response = await fetch('https://jsonplaceholder.typicode.com/users');

const users = await response.json();

displayUsers(users);

} catch (error) {

const userList = document.querySelector('#user-list');

const errorMessage = document.createElement('li');

errorMessage.textContent = 'Failed to load user data. Please try again later.';

userList.appendChild(errorMessage);

console.error('Error fetching user data:', error);

}

}

  

// Display users on the page

function displayUsers(users) {

const userList = document.querySelector('#user-list');

users.forEach(user => {

const listItem = document.createElement('li');

listItem.textContent = `${user.name} (${user.email})`;

userList.appendChild(listItem);

});

}

  

// Call the function

fetchAndDisplayUsers();

```

  

---

  

## Next Steps

After completing this lesson, try extending the functionality by:

- Adding a loading spinner while the data is being fetched.

- Allowing users to filter the displayed list based on a search input.

- Experimenting with additional API endpoints like `https://jsonplaceholder.typicode.com/posts`.

  

---

  

This structured lesson ensures that learners can practice and understand asynchronous JavaScript in a practical and engaging way.
