
import axios from 'axios';

const API_KEY = 'cd4b515602aeea9321adf1976151d4cf';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: { api_key: API_KEY, language: 'en-US', ...params },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { results: [] };
  }
};
