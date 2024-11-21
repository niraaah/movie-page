# MovieApp

A Netflix-like front-end demo site built using React.js and the TMDb API.

## Features

- **User Authentication**: Login and signup functionality with Local Storage.
- **Movie Browsing**: Explore popular movies and filter them by genres, ratings, and more.
- **Wishlist Management**: Save your favorite movies to a personal wishlist.
- **Search Movies**: Find movies using advanced search filters.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Deployment**: Hosted on GitHub Pages.

## Setup Instructions

Follow these steps to set up the project:

### 1. Clone the Repository

```bash
git clone https://github.com/niraaah/movieapp.git
```

### 2. Navigate to the Project Directory

```bash
cd movieapp
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Add Your TMDb API Key

Replace `YOUR_TMDB_API_KEY` in `src/utils/API.js` and `src/utils/Authentication.js` with your actual TMDb API key. Make sure to keep it secure and do not expose it in public repositories.

### 5. Start the Development Server

```bash
npm start
```
This will open the project in your browser at http://localhost:3000.

### 6. Build for Production

```bash
npm run build
```

### 7. Deploy to GitHub Pages

```bash
npm run deploy
```
Make sure your homepage in `package.json` is correctly set to your GitHub Pages URL.

## Deployment

The project is deployed at:
- GitHub Repository: https://github.com/niraaah/movie-page
- Live Demo: https://niraaah.github.io/movie-page

## Technologies Used

- React.js: Front-end framework for building the UI.
- React Router: For creating a Single Page Application (SPA).
- Axios: For API requests.
- TMDb API: For fetching movie data.
- Local Storage: For state persistence (e.g., wishlist, user session).

## Project Structure

```plaintext
movie-page/
├── public/
│   └── index.html
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Page components for routing
│   ├── utils/        # API, authentication, and wishlist utilities
│   ├── App.js        # Main app component
│   └── index.js      # Entry point
├── .gitignore        # Ignore unnecessary files
├── package.json      # Project metadata and scripts
├── README.md         # Project documentation
└── mobile.mp4        # Demo video of mobile view
```

## Features in Detail

### Authentication

- Login: Authenticate users with email and password.
- Signup: Register new users and store their data locally.
- Persistent Session: Keeps users logged in using Local Storage.

### Movie Browsing

- Popular Movies: Fetch and display the most popular movies using the TMDb API.
- Search and Filter: Advanced filtering by genres, ratings, and sorting options.

### Wishlist

- Add or remove movies from your personal wishlist.
- Wishlist is saved in Local Storage for persistence.

### Responsive Design

- Works seamlessly on desktop, tablet, and mobile devices.

### AI Assistance

- ChatGPT was used to generate boilerplate code and optimize components. (이 부분은 ChatGPT의 도움을 받았음을 명확히 하였습니다.)

## License

This project is licensed under the MIT License.