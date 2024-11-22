# Cineflex - Movie Streaming App

Cineflex is a simple movie streaming web app that allows users to explore popular movies, trending titles, and top-rated films. The app fetches movie data from The Movie Database (TMDb) API and displays them in different categories, such as Netflix Originals, Trending Now, and Top Rated.

## Features
- View **Featured Movies** with a description and action buttons (Play and Add to My List).
- Browse movies in categories: **Netflix Originals**, **Trending Now**, and **Top Rated**.
- **Watch Trailers** by clicking on movie posters.
- **Login/Logout** toggle to simulate user session.

## Tech Stack
- **HTML**: For structure.
- **CSS**: For styling.
- **JavaScript**: For dynamic movie fetching and interactions.
- **TMDb API**: For fetching movie data and trailers.

## Getting Started

To run this project locally, follow these simple steps:

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/cineflex.git
    ```

2. **Navigate to the project folder**:
    ```bash
    cd cineflex
    ```

3. **Open `index.html` in your browser**.

### API Key Setup

In the `script.js` file, replace the `YOUR_API_KEY` placeholder with your actual API key:

```javascript
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
```
Get your API key by signing up at TMDb.

### Dependencies
- Bootstrap (for responsive layout)
- Font Awesome (for icons)
These are linked in the index.html file, so no need for installation.

### File Structure

cineflex/

│

├── index.html        # Main HTML file

├── style.css         # CSS file for styling

├── script.js         # JavaScript file for fetching data and handling interactions

└── README.md         # Project documentation
### Usage
Browse Movies: Scroll through movie categories.
Watch Trailers: Click a movie poster to watch the trailer in a modal.
Login/Logout: Click the Login/Logout button to toggle user session.
### Troubleshooting
Ensure you have a valid API key in the script.js file.
Check your internet connection for fetching movie data.
### License
This project is open source, and you are free to use and modify it.
