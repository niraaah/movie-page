import axios from 'axios';

const API_KEY = 'your_tmdb_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: { api_key: API_KEY, language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { results: [] };
  }
};
