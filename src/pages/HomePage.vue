<template></template>

<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { moviesService } from '../services/MoviesService.js'

export default {
  setup() {

    async function getMovies() {
      try {
        await moviesService.getMovies()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      getMovies()
    })
    return {

    }
  }
}
</script>

<style scoped lang="scss"></style>
