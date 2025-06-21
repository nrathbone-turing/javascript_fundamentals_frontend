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


// search functionality



// display pronounciation, definitions, synonyms

function showDefinition(word) {

}

// provide audio playback for pronounciation


export { 
    fetchDefinition,
    showDefinition, 
};