// DOM behavior, integration-style tests

jest.mock("../public/src/index.js", () => ({
    fetchDefinition: jest.fn(),
    showDefinition: jest.fn(),
}));

test("displays error on empty input", () => {
    document.body.innerHTML = `
        <form id="search-form">
            <input type="text" id="word-input" />
            <button type="submit">Search</button>
        </form>
        <section id="error-message" class="hidden"></section>
    `;

    require("../public/src/app.js");

    const form = document.getElementById("search-form");
    const event = new Event("submit", { bubbles: true }); //ensures that the event can trigger any event listeners that are set on parent elements as well (not just the form)
    
    form.dispatchEvent(event);

    const error = document.getElementById("error-message");
    
    expect(error.textContent).toBe("Please enter a word.");
    expect(error.classList.contains("hidden")).toBe(false);
});

test("submits word and displays definition", async () => {
    document.body.innerHTML = `
        <form id="search-form">
            <input type="text" id="word-input" value="test" />
            <button type="submit">Search</button>
        </form>
        <section id="error-message" class="hidden"></section>
        <section id="definition-container" class="hidden">
            <p id="word"></p>
            <p id="definition"></p>
            <ul id="pronunciation"></ul>
            <ul id="synonym"></ul>
            <button id="audio-playback"></button>
        </section>
    `;

    require("../public/src/app.js");
    
    const { fetchDefinition, showDefinition } = require("../public/src/index.js");

    fetchDefinition.mockResolvedValueOnce({
        word: "test",
        meanings: [],
        phonetics: []
    });

    const form = document.getElementById("search-form");
    const event = new Event("submit", { bubbles: true });
    
    await form.dispatchEvent(event);

    expect(fetchDefinition).toHaveBeenCalledWith("test");
    expect(showDefinition).toHaveBeenCalled();
});
