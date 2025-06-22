// Define the function to display astronauts

// Function to display astronauts data
// Hint: Create a function called displayAstronauts(data)
function displayAstronauts(data) {
    // Hint: Select the <ul> element with the id "astronaut-list"
    astronautList = document.getElementById("astronaut-list");

    // Hint: Loop through the data.people array and create <li> elements for each astronaut's name
    data.people.forEach(astronaut => {
        const listItem = document.createElement("li");  

        listItem.textContent = astronaut.name;      
            
        // Hint: Append the <li> elements to the <ul> element
        astronautList.appendChild(listItem);
    });
}


// Fetch data from the external API
document.addEventListener("DOMContentLoaded", () => {
    // Hint: Use fetch() to make an HTTP request to "http://api.open-notify.org/astros.json"
    fetch('http://api.open-notify.org/astros.json')
        // Hint: Use .then() to process the response and convert it to JSON
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
        // Hint: Call the displayAstronauts() function with the fetched data
        displayAstronauts(data)})

        // Hint: Use .catch() to handle any errors that occur during the fetch proces.catch(function (error) {
        .catch(function (error) {
            console.error("Error fetching astronaut data:", error)
        });
});

module.exports = {
    displayAstronauts
}