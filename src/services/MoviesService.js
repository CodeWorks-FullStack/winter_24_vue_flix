import { logger } from "../utils/Logger.js"
import { movieApi } from "./AxiosService.js"

class MoviesService {
  async getMovies() {
    const response = await movieApi.get('discover/movie')
    logger.log('📡 GOT MOVIES', response.data)
  }
}

export const moviesService = new MoviesService()