<template>
  <!-- Modal -->
  <div class="modal fade" id="movieModal" tabindex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div v-if="movie" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="movieModalLabel">{{ movie.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <section class="row">
              <div class="col-md-5">
                <img :src="movie.highQualityBackdropImgUrl" :alt="movie.title" class="img-fluid">
              </div>
              <div class="col-md-7">
                <h1>{{ movie.title }}</h1>
                <h2>{{ movie.tagline }}</h2>
                <h3>Budget: {{ movie.budget }} Revenue: {{ movie.revenue }}</h3>
                <h4 :class="{ 'text-danger': movie.revenue - movie.budget < 0 }">
                  Income: {{ movie.revenue - movie.budget }}
                </h4>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      movie: computed(() => AppState.activeMovie)
    }
  }
}
</script>


<style lang="scss" scoped></style>