let animeList = [];

// Function to add anime to the list
function addAnime() {
  const name = document.getElementById('anime-name').value;
  const seasons = document.getElementById('anime-seasons').value;
  const episodes = document.getElementById('anime-episodes').value;
  const rating = document.getElementById('anime-rating').value;
  const status = document.getElementById('anime-status').value;

  if (name.trim() === '') {
    alert('Please enter an anime name.');
    return;
  }

  const anime = {
    name: name,
    seasons: seasons,
    episodes: episodes,
    rating: rating,
    status: status,
  };

  animeList.push(anime);
  renderList();
  clearForm();
}

// Function to clear the form after adding anime
function clearForm() {
  document.getElementById('anime-name').value = '';
  document.getElementById('anime-seasons').value = '';
  document.getElementById('anime-episodes').value = '';
  document.getElementById('anime-rating').value = '';
  document.getElementById('anime-status').value = 'Plan to Watch';
}

// Function to render the anime list
function renderList() {
  const listElement = document.getElementById('anime-list');
  listElement.innerHTML = '';

  animeList.forEach((anime, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="card-head"><h3>${anime.name}</h3>(${anime.status})</div>
      <p>Total Seasons: ${anime.seasons}</p>
      <p>Total Episodes: ${anime.episodes}</p>
      <p>TV Rating: ${anime.rating}</p>
      <button onclick="deleteAnime(${index})">Delete</button>
    `;
    listElement.appendChild(listItem);
  });
}

// Function to delete an anime from the list
function deleteAnime(index) {
  animeList.splice(index, 1);
  renderList();
}

// Function to generate a shareable link with the anime data
function generateLink() {
  const dataString = encodeURIComponent(JSON.stringify(animeList));
  const url = `${window.location.origin}${window.location.pathname}?data=${dataString}`;
  document.getElementById('share-link').value = url;
}

// Function to load data from the URL
function loadDataFromURL() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('data')) {
    const dataString = params.get('data');
    try {
      animeList = JSON.parse(decodeURIComponent(dataString));
      renderList();
    } catch (e) {
      console.error('Failed to parse anime data from URL', e);
    }
  }
}

// Load data when the page loads
window.onload = loadDataFromURL;
