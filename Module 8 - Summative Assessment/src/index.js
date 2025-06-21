// index.js
// reusable and modular logic for the app

// fetch word data from Free Dictionary API
async function fetchDefinition(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        
        if (!response.ok) throw new Error("Word not found");
        return response.json();
        
    } catch (error) {
        console.error("Error fetching the dictionary data", error);
        throw error;
    }
}
// parsing and displaying fetched data
// display pronounciation, definitions, synonyms in the DOM

function showDefinition(data) {
    const container = document.getElementById("definition-container");
    const entry = data[0];
    const wordElement = document.getElementById("word");
    const definitionElement = document.getElementById("definition");
    // not sure if i need separate objects for the key/value pairs within the definition object separately
    // const pronounciationElement = document.getElementById("pronounciation");
    // const synonymElement = document.getElementById("synonym");

    wordElement.textContent = entry.word
    definitionElement.textContent = entry.meanings[0].definitions.definition
    // pronounciationElement.textContent = entry.phonetics[0].text
    // synonymElement.textContent = entry.meanings[0].definitions.synonyms


    // provide audio playback for pronounciation if available
    const audioPlayback = document.getElementById("audio-playback")
    audioplayback.textContent = entry.phonetics.audio

    container.classList.remove("hidden");
}

export { 
    fetchDefinition,
    showDefinition,
};