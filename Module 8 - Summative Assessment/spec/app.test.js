// DOM behavior, integration-style tests

test("displays error on empty input", () => {
    document.body.innerHTML = `
        <form id="search-form">
            <input type="text" id="word-input" />
            <button type="submit">Search</button>
        </form>
        <section id="error-message" class="hidden"></section>
    `;

    require("../src/app.js");

    const form = document.getElementById("search-form");
    const event = new Event("submit", { bubbles: true }); //ensures that the event can trigger any event listeners that are set on parent elements as well (not just the form)
    
    form.dispatchEvent(event);

    const error = document.getElementById("error-message");
    
    expect(error.textContent).toBe("Please enter a word.");
    expect(error.classList.contains("hidden")).toBe(false);
});