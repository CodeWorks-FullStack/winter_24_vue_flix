import { AppState } from "../AppState.js"
import { Movie } from "../models/Movie.js"
import { logger } from "../utils/Logger.js"
import { movieApi } from "./AxiosService.js"

class MoviesService {
  async getMovies() {
    const response = await movieApi.get('discover/movie')
    logger.log('📡 GOT MOVIES', response.data)
    const newMovies = response.data.results.map(moviePOJO => new Movie(moviePOJO))
    AppState.movies = newMovies
  }

  async getMovieById(movieId) {
    const response = await movieApi.get(`movie/${movieId}`)
    logger.log('📡 GOT MOVIE', response.data)
    const newMovie = new Movie(response.data)
    AppState.activeMovie = newMovie
  }
}

export const moviesService = new MoviesService()