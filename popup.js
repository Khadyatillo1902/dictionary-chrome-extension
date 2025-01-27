document.getElementById('searchBtn').addEventListener("click", async () => {
    const word = document.getElementById('wordInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!word) {
        resultDiv.innerText = 'Please enter a word';
        return;
    }

    resultDiv.innerText = 'Searching...';

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) throw new Error("Word not found");

        const data = await response.json();
        const definition = data[0].meanings[0].definitions[0].definition;

        resultDiv.innerText = `Definition: ${definition}`;
    } catch (error) {
        resultDiv.innerText = error.message || "Error fetching definition.";
    }
});