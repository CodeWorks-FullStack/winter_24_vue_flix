<template>
  <div class="container">
    <div class="section row">
      <div class="col-12">
        <h1>Movies</h1>
      </div>

      <div class="col-12">
        <form @submit.prevent="searchMovies()">
          <div class="input-group mb-3">
            <input v-model="editableSearchQuery" required type="text" class="form-control" placeholder="Movie Title"
              aria-label="Title of movie" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
              Search <i class="mdi mdi-magnify"></i>
            </button>
          </div>
        </form>
      </div>

      <div v-if="savedSearch" class="col-12 d-flex align-items-center">
        <p class="fs-3">Showing results for "{{ savedSearch }}"</p>
        <button class="btn btn-danger ms-3" @click="clearSearch()">Clear Search</button>
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
import { computed, onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { moviesService } from '../services/MoviesService.js'
import { AppState } from '../AppState.js'
import MoviePoster from '../components/MoviePoster.vue';
import ModalComponent from '../components/ModalComponent.vue';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    const editableSearchQuery = ref('')

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
      editableSearchQuery,
      movies: computed(() => AppState.movies),
      currentPage: computed(() => AppState.currentPage),
      totalPages: computed(() => AppState.totalPages),
      savedSearch: computed(() => AppState.searchQuery),

      async changePage(pageNumber) {
        try {
          if (!editableSearchQuery.value) {
            await moviesService.changePage(pageNumber)
          }
          else {
            await moviesService.changePageWithSearchQuery(editableSearchQuery.value, pageNumber)
          }
        } catch (error) {
          Pop.error(error)
        }
      },

      async searchMovies() {
        try {
          logger.log('searching for:', editableSearchQuery.value)
          await moviesService.searchMovies(editableSearchQuery.value)
        } catch (error) {
          Pop.error(error)
        }
      },

      async clearSearch() {
        try {
          editableSearchQuery.value = ''
          moviesService.clearSearch()
          await getMovies()
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
