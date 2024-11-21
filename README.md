# Netflix Clone Project

A Netflix-inspired web application built using React.js. This project demonstrates the use of TMDb API for dynamic movie data, local storage for state persistence, and various front-end development best practices.

## Features
- **Dynamic Movie Data**: Powered by TMDb API.
- **Wishlist Management**: Add/remove movies from a personalized wishlist.
- **Authentication**: Login and signup using local storage.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

## Install dependencies:

```bash
npm install
```

## Start the development server:

```bash
npm start
```

## Project Structure

- src/components: Reusable React components (e.g., Header, MovieCard).
- src/pages: Main pages for routing (e.g., Home, Wishlist).
- src/services: API and utility functions.
- src/hooks: Custom hooks for reusable logic.
- src/styles: CSS files for styling.

## TMDb API Setup

1. Create an account at TMDb.
2. Get your API key and add it to a .env file:

```env
REACT_APP_TMDB_API_KEY=your_api_key
```

## Scripts

- npm start: Start the development server.
- npm build: Build the app for production.
- npm test: Run tests.

## License

MIT License.