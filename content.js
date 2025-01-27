const tooltip = document.createElement("div");

tooltip.style.position = 'absolute';
tooltip.style.backgroundColor = '#f9f9f9';
tooltip.style.border = '1px solid #ccc';
tooltip.style.borderRadius = '5px';
tooltip.style.padding = '10px';
tooltip.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
tooltip.style.display = 'none';
tooltip.style.color = '#000'
tooltip.style.zIndex = '10000';
tooltip.style.all = 'unset';
tooltip.style.position = 'absolute';
document.body.appendChild(tooltip);

document.addEventListener('dblclick', async (event) => {

    const selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`);

        const data = await response.json();

        const definition = data[0]?.meanings[0]?.definitions[0]?.definition || "No definition found";

        tooltip.textContent = `Definition of "${selectedText}": ${definition}`;
        tooltip.style.left = `${event.pageX}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
        tooltip.style.display = 'block';

        setTimeout(() => {
            tooltip.style.display = 'none';
        }, 5000);
        
    }
})