import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3e074b6d14a7158d77bae02b97da066e'

const whitBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;


export class MoviesServes {
   static getMovies() {
        return axios(whitBaseUrl('movie/popular'));
    }
    static getMoviesDataill(id) {
        return axios(whitBaseUrl(`movie/${id}`));
    }
    static getMoieSearch(movies) {
        return axios(whitBaseUrl('search/movies') + (`&query=${movies}`));
    }
}