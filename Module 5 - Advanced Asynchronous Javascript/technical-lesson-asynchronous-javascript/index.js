// old version using fetch()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users => {
//     console.log(users); // Log the user data to check the API response
//     displayUsers(users); // then call the function
// })

// .catch(error => {
//     console.error('Error fetching user data:', error);
// });

// refactored version with async/await

async function fetchAndDisplayUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json(); // parse the json file if successful

        displayUsers(users); // then call the function
    } catch (error) {
        // add error handling
        const userList = document.querySelector("#user-list");
        const errorMessage = document.createElement("li");

        errorMessage.textContent = "Failed to load user data. Please try again later.";
        
        userList.appendChild(errorMessage);

        console.error("Error fetching user data:", error);
    }
}
// display users on the page
function displayUsers(users) {
    const userList = document.querySelector("#user-list");

    users.forEach(user => {

        const listItem = document.createElement("li");

        listItem.textContent = `${user.name} (${user.email})`;

        userList.appendChild(listItem);
    });
}
