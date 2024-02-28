import { AppState } from "../AppState.js"
import { Movie } from "../models/Movie.js"
import { logger } from "../utils/Logger.js"
import { movieApi } from "./AxiosService.js"

function _handleMovieResponse(response) {
  const newMovies = response.data.results.map(moviePOJO => new Movie(moviePOJO))
  AppState.movies = newMovies
  AppState.currentPage = response.data.page
  AppState.totalPages = response.data.total_pages
}



class MoviesService {
  async getMovies() {
    const response = await movieApi.get('discover/movie')
    logger.log('📡 GOT MOVIES', response.data)
    const newMovies = response.data.results.map(moviePOJO => new Movie(moviePOJO))
    AppState.movies = newMovies
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }

  async getMovieById(movieId) {
    const response = await movieApi.get(`movie/${movieId}`)
    logger.log('📡 GOT MOVIE', response.data)
    const newMovie = new Movie(response.data)
    AppState.activeMovie = newMovie
  }

  async changePage(pageNumber) {
    const response = await movieApi.get(`discover/movie?page=${pageNumber}`)
    logger.log('changing page', response.data)
    const newMovies = response.data.results.map(moviePOJO => new Movie(moviePOJO))
    AppState.movies = newMovies
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages

  }

  async searchMovies(searchQuery) {
    const response = await movieApi.get(`search/movie?query=${searchQuery}`)
    logger.log('SEARCHING MOVIES', response.data)
  }


}

export const moviesService = new MoviesService()

