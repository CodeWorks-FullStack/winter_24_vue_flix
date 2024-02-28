<template>
  <div class="container">
    <div class="section row">
      <div class="col-12">
        <h1>Movies</h1>
      </div>
      <div class="col-12 d-flex align-items-center my-2">
        <button class="btn btn-outline-dark">Previous</button>
        <p class="mb-0 mx-3 fs-4">Page {{ currentPage }} of {{ totalPages }}</p>
        <button class="btn btn-outline-dark">Next</button>
      </div>
    </div>

    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-md-3 mb-3">
        <MoviePoster :movie="movie" />
      </div>
    </section>
  </div>

  <ModalComponent />
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { moviesService } from '../services/MoviesService.js'
import { AppState } from '../AppState.js'
import MoviePoster from '../components/MoviePoster.vue';
import ModalComponent from '../components/ModalComponent.vue';

export default {
  setup() {
    async function getMovies() {
      try {
        await moviesService.getMovies();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getMovies();
    });
    return {
      movies: computed(() => AppState.movies),
      currentPage: computed(() => AppState.currentPage),
      totalPages: computed(() => AppState.totalPages)
    };
  },
  components: { MoviePoster, ModalComponent }
}
</script>

<style scoped lang="scss"></style>
