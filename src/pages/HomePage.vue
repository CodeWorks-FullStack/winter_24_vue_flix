<template>
  <div class="container">
    <div class="section row">
      <div class="col-12">
        <h1>Movies</h1>
      </div>
      <div class="col-12 d-flex align-items-center my-2">
        <button @click="changePage(currentPage - 1)" class="btn btn-outline-dark" :disabled="currentPage == 1">
          Previous
        </button>
        <p class="mb-0 mx-3 fs-4">Page {{ currentPage }} of {{ totalPages }}</p>
        <button @click="changePage(currentPage + 1)" class="btn btn-outline-dark"
          :disabled="currentPage == totalPages || currentPage == 500">
          Next
        </button>
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
      totalPages: computed(() => AppState.totalPages),

      async changePage(pageNumber) {
        try {
          await moviesService.changePage(pageNumber)
        } catch (error) {
          Pop.error(error)
        }
      }
    };
  },
  components: { MoviePoster, ModalComponent }
}
</script>

<style scoped lang="scss"></style>
