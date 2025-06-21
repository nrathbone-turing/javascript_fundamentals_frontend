// app.js
//runner file for the app
import { fetchDefinition, showDefinition } from './index.js';

// event listeners to handle form submission, user actions, and errors
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const input = document.getElementById("word-input");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const word = input.value.trim();

        if (!word) {
            errorMessage.textContent = "Please enter a word.";
            errorMessage.classList.remove("hidden");
            return;
        }

        try {
            const data = await fetchDefinition(word);
            
            showDefinition(data[0]);
            
            errorMessage.classList.add("hidden");
        } catch (error) {
            errorMessage.textContent = error.message;
            errorMessage.classList.remove("hidden");
        }
    });
});