const API_KEY = '19f84e11932abbc79e6d83f82d6d1045'; // Replace with your actual API key

// Helper function to fetch movies from the API
function fetchMovies(url, domElement, pathType) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong!');
      }
    })
    .then(data => {
      showMovies(data, domElement, pathType);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
    });
}

// Function to display movies in the DOM
function showMovies(movies, domElement, pathType) {
  const moviesEl = document.querySelector(domElement);
  movies.results.forEach(movie => {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('data-id', movie.id);
    imageElement.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    imageElement.addEventListener('click', () => {
      showTrailer(movie.id, pathType);
    });
    moviesEl.appendChild(imageElement);
  });
}

// Function to fetch movie trailer
function showTrailer(id, pathType) {
  const url = `https://api.themoviedb.org/3/${pathType}/${id}/videos?api_key=${API_KEY}&language=en-US`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const trailerData = data.results.find(item => item.type === 'Trailer');
      if (trailerData) {
        document.getElementById('movieTrailer').src = `https://www.youtube.com/embed/${trailerData.key}`;
        document.getElementById('movieTitle').textContent = trailerData.name;
        $('#trailerModal').modal('show');
      } else {
        document.querySelector('.movieNotFound').style.display = 'block';
      }
    })
    .catch(() => {
      document.querySelector('.movieNotFound').style.display = 'block';
    });
}

// Fetching Data from API
const API_BASE_URL = 'https://api.themoviedb.org/3';
fetchMovies(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`, '#originals', 'movie');
fetchMovies(`${API_BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`, '#trending', 'movie');
fetchMovies(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`, '#top_rated', 'movie');

// Login/Logout functionality
let isLoggedIn = false;

const loginLogoutButton = document.getElementById('loginLogoutBtn');

loginLogoutButton.addEventListener('click', () => {
  if (isLoggedIn) {
    isLoggedIn = false;
    loginLogoutButton.textContent = 'Login';
    alert('You have logged out!');
  } else {
    isLoggedIn = true;
    loginLogoutButton.textContent = 'Logout';
    alert('You have logged in!');
  }
});
