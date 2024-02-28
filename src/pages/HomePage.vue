<template>
  <div class="container">
    <div class="section row">
      <div class="col-12">
        <h1>Movies</h1>
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
      movies: computed(() => AppState.movies)
    };
  },
  components: { MoviePoster }
}
</script>

<style scoped lang="scss"></style>
