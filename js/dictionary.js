function searchDictionary() {
    const input = document.getElementById('searchInput').value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const meanings = document.getElementById('meanings');
            meanings.innerHTML = '';
            data.forEach(entry => {
                entry.meanings.forEach(meaning => {
                    const definition = document.createElement('div');
                    definition.classList.add('definition');
                    definition.innerHTML = `<strong>${entry.word}</strong>: ${meaning.definitions[0].definition}`;
                    meanings.appendChild(definition);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const meanings = document.getElementById('meanings');
            meanings.innerHTML = 'Sorry, something went wrong. Please try again later.';
        });
}
