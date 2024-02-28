<template>
  <img @click="getMovieById(movie.id)" :src="movie.lowQualityPosterImgUrl" :alt="movie.title" :title="movie.title"
    class="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#movieModal" role="button">
</template>


<script>
import { Movie } from '../models/Movie.js';
import { moviesService } from '../services/MoviesService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    movie: { type: Movie, required: true }
  },
  setup() {
    return {
      async getMovieById(movieId) {
        try {
          await moviesService.getMovieById(movieId)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>