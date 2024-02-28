<template>
  <img :src="movie.lowQualityPosterImgUrl" :alt="movie.title" :title="movie.title" class="img-fluid rounded">
</template>


<script>
import { Movie } from '../models/Movie.js';

export default {
  props: {
    movie: { type: Movie, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>