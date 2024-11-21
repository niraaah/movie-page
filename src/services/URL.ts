import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'cd4b515602aeea9321adf1976151d4cf';

const TMDbAPI = {
  getNowPlaying: async (page: number = 1) => {
    const response = await axios.get(
      `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${page}`
    );
    return response.data;
  },

  getPopularMovies: async (page: number = 1) => {
    const response = await axios.get(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`
    );
    return response.data;
  },

  searchMovies: async (query: string, page: number = 1) => {
    const response = await axios.get(
      `${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${query}&page=${page}`
    );
    return response.data;
  },

  getMovieDetails: async (movieId: number) => {
    const response = await axios.get(
      `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
    );
    return response.data;
  },
};

export default TMDbAPI;
