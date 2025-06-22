// logic unit tests (fetchDefinition, string formatting, error handling, etc.)
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const { JSDOM } = require("jsdom");
const { fetchDefinition, showDefinition } = require("../public/src/index.js");

global.fetch = jest.fn(); // mock the global fetch

// clear the mocked fetch data before each test
beforeEach(() => {
    fetch.mockClear();
});

// testing successful API calls for valid words
test("fetches definition API for valid word", async () => {
    const result = await fetchDefinition("hello");
    
    expect(result[0].word).toBe("hello");
});

// testing error handling for invalid word searches
test("throws error for invalid word", async () => {
    await expect(fetchDefinition("askhwbqbkas")).rejects.toThrow("Word not found");
});

// testing error handling for API/fetching issues
test("throws error for error fetching dictionary data", async() => {
    // simulate network failure
    fetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchDefinition("test")).rejects.toThrow("Network error");
});

// testing that showDefinition populates the DOM correctly
test("showDefinition displays word, definitions, and synonyms", () => {
    document.body.innerHTML = `
        <section id="definition-container" class="hidden">
            <p id="word"></p>
            <p id="definition"></p>
            <ul id="pronunciation"></ul>
            <ul id="synonym"></ul>
            <button id="audio-playback"></button>
        </section>
    `;

    const mockData = {
        word: "test",
        meanings: [
            {
                partOfSpeech: "noun",
                definitions: [{ definition: "A procedure to assess something.", synonyms: ["exam"] }]
            }
        ],
        phonetics: [
            { text: "/tɛst/", audio: "//example.com/test.mp3" }
        ]
    };

    showDefinition(mockData);

    expect(document.getElementById("word").textContent).toBe("test");
    expect(document.getElementById("definition").innerHTML).toContain("procedure");
    expect(document.getElementById("pronunciation").innerHTML).toContain("/tɛst/");
    expect(document.getElementById("synonym").innerHTML).toContain("exam");
    expect(document.getElementById("definition-container").classList.contains("hidden")).toBe(false);
});

// testing that the audio button "works" by correctly parsing the provided URL if there is one
test("sets up audio button if audio is available", () => {
    document.body.innerHTML = `
        <section id="definition-container" class="hidden">
            <p id="word"></p>
            <p id="definition"></p>
            <ul id="pronunciation"></ul>
            <ul id="synonym"></ul>
            <button id="audio-playback"></button>
        </section>
    `;

    const mockData = {
        word: "hello",
        meanings: [
            {
                partOfSpeech: "noun",
                definitions: [{ definition: "A greeting." }]
            }
        ],
        phonetics: [
            { text: "/həˈləʊ/", audio: "//audio.example.com/hello.mp3" }
        ]
    };

    // spy on the Audio constructor
    const audioSpy = jest.spyOn(global, "Audio").mockImplementation(() => ({
        play: jest.fn()
    }));

    showDefinition(mockData);

    const button = document.getElementById("audio-playback");

    expect(button.textContent).toBe("Play audio");

    // simulate button click
    button.click();
    expect(audioSpy).toHaveBeenCalledWith("https://audio.example.com/hello.mp3");

    audioSpy.mockRestore();
});

// testing that the audio button is disabled if there is no audio available for a word
test("disables audio button if no audio is available", () => {
    document.body.innerHTML = `
        <section id="definition-container" class="hidden">
            <p id="word"></p>
            <p id="definition"></p>
            <ul id="pronunciation"></ul>
            <ul id="synonym"></ul>
            <button id="audio-playback"></button>
        </section>
    `;

    const mockData = {
        word: "example",
        meanings: [
            {
                partOfSpeech: "noun",
                definitions: [{ definition: "An instance." }]
            }
        ],
        phonetics: [
            { text: "/ɪɡˈzɑːmpəl/" } // no audio field
        ]
    };

    showDefinition(mockData);

    const button = document.getElementById("audio-playback");

    expect(button.textContent).toBe("No Audio available");
    expect(button.onclick).toBe(null);
});