const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results');
const genreFilter = document.getElementById('genre-filter');
const yearFilter = document.getElementById('year-filter');

// Function to fetch anime data (you'll need to replace this with your API call)
function fetchAnimeData(query, genre, year) {
    // Example using a placeholder API (replace with your actual API)
    const apiUrl = `https://api.example.com/anime?q=${query}&genre=${genre}&year=${year}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display anime results
function displayResults(data) {
    resultsContainer.innerHTML = ''; // Clear previous results

    data.forEach(anime => {
        const animeResult = document.createElement('div');
        animeResult.classList.add('anime-result');
        animeResult.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <p>Genre: ${anime.genre}</p>
            <p>Year: ${anime.year}</p>
        `;
        resultsContainer.appendChild(animeResult);
    });
}

// Event listener for search button
searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    const genre = genreFilter.value;
    const year = yearFilter.value;
    fetchAnimeData(query, genre, year);
});

// Event listener for genre filter (add more filters as needed)
genreFilter.addEventListener('change', () => {
    const query = searchInput.value;
    const genre = genreFilter.value;
    const year = yearFilter.value;
    fetchAnimeData(query, genre, year);
});

// Event listener for year filter (add more filters as needed)
yearFilter.addEventListener('change', () => {
    const query = searchInput.value;
    const genre = genreFilter.value;
    const year = yearFilter.value;
    fetchAnimeData(query, genre, year);
});
