chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "lookupWord",
        title: "Look up word: '%s'",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
    if (info.menuItemId === "lookupWord") {
        const word = info.selectionText;
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        const definition = data[0]?.meanings[0].definitions[0].definition || "No definition found";
        alert(`${definition}`);
    }
});