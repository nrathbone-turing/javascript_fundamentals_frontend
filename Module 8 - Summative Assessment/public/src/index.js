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
// display pronunciation, definitions, synonyms in the DOM

function showDefinition(data) {
    const container = document.getElementById("definition-container");
    const wordElement = document.getElementById("word");
    const definitionElement = document.getElementById("definition");
    const pronunciationList = document.getElementById("pronunciation");
    const synonymList = document.getElementById("synonym");
    const audioPlayback = document.getElementById("audio-playback")

    // set word title
    wordElement.textContent = data.word

    // combine all definitions and parts of speech
    const definitionText = data.meanings.map(meaning => {
        const def = meaning.definitions[0];
        
        return `(${meaning.partOfSpeech}) ${def.definition}`;
    }).join("\n\n");
    
    definitionElement.innerHTML = definitionText.replace(/\n\n/g, "<br><br>");

    // populate pronunciation list
    pronunciationList.innerHTML = "";
    
    data.phonetics.forEach(phonetic => {
        if (phonetic.text) {
            const li = document.createElement("li");
            
            li.textContent = phonetic.text;
            
            pronunciationList.appendChild(li);
        }
    });

    // populate synonym list (from first definition only for simplicity)
    synonymList.innerHTML = "";
    const synonyms = data.meanings[0]?.definitions[0]?.synonyms || [];
    
    synonyms.forEach(synonym => {
        const li = document.createElement("li");
        
        li.textContent = synonym;
        
        synonymList.appendChild(li);
    });

    // provide audio playback for pronunciation if available
    const audioSrc = data.phonetics.find(phonetic => phonetic.audio)?.audio;
    
    if (audioSrc) {
        audioPlayback.textContent = "Play audio";
        audioPlayback.onclick = () => {
        
            const audio = new Audio(audioSrc.startsWith("http") ? audioSrc : `https:${audioSrc}`);
        
            audio.play();
        };
    } else {
        audioPlayback.textContent = "No Audio available";
        audioPlayback.onclick = null;
    }

    container.classList.remove("hidden");
}

export { 
    fetchDefinition,
    showDefinition,
};