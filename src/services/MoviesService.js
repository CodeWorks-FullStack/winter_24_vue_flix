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
}

export const moviesService = new MoviesService()