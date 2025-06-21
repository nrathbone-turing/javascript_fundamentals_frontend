// logic unit tests (fetchDefinition, string formatting, error handling, etc.)

import { 
    fetchDefinition, showDefinition
} from "../src/index.js";

// Initialize JSDOM
const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable"
});

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