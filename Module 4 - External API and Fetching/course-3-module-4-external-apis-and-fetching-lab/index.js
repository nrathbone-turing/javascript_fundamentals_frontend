// index.js

// Step 1: Fetch Data from the API
// - Create a function `fetchWeatherData(city)`
function fetchWeatherData(city) {
    // - Use fetch() to retrieve data from the OpenWeather API
    const apiKey = '78a5f3fdf48665a299684d35fd93befe'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

    return fetch(url)
        // - Handle invalid city names or network issues
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found")
            }
            // - Handle the API response and parse the JSON
            return response.json()
        })
        .then(data => {
            console.log(data) // - Log the data to the console for testing
            displayWeather(data)
            return data
        })
        // Use .catch() to handle any errors that occur during the fetch process
        .catch(error => {
            displayError(`Error: ${error.message}`)
        })
}

// Step 2: Display Weather Data on the Page
// - Create a function `displayWeather(data)`
function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display')

    // - Dynamically update the DOM with weather details (e.g., temperature, humidity, weather description)
    // - Ensure the function can handle the data format provided by the API
    weatherDisplay.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°F</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
    `
}

document.addEventListener("DOMContentLoaded", () => {
// Step 3: Handle User Input
    const button = document.getElementById("fetch-weather")

    // - Add an event listener to the button to capture user input
    button.addEventListener("click", (event) => {
        event.preventDefault()
        // - Retrieve the value from the input field
        const city = document.getElementById("city-input").value.trim()
    
        // - Call `fetchWeatherData(city)` with the user-provided city name
        if (city) fetchWeatherData(city)
    })
});

// Step 4: Implement Error Handling
// - Create a function `displayError(message)`
function displayError(message) {
    // Creating the container to receive the error messages
    const errorMessage = document.getElementById("error-message")
    // - Dynamically display error messages in a dedicated section of the page
    errorMessage.textContent = message
    errorMessage.classList.remove("hidden")

    // Clear weatherDisplay on error
    document.getElementById("weather-display").innerHTML = ''
}

module.exports = {
    fetchWeatherData,
    displayWeather,
    displayError
}

// Step 5: Optimize Code for Maintainability
// - Refactor repetitive code into reusable functions
// - Use async/await for better readability and to handle asynchronous operations
// - Ensure all reusable functions are modular and clearly named

// BONUS: Loading Indicator
// - Optionally, add a loading spinner or text while the API request is in progress

// BONUS: Additional Features
// - Explore adding more features, such as displaying additional weather details (e.g., wind speed, sunrise/sunset)
// - Handle edge cases, such as empty input or API rate limits

// Event Listener for Fetch Button
// - Attach the main event listener to the button to start the process
