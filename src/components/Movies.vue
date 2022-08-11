<template>
  <main>
    <div class="container movie-center" id="movie-list">
      <MovieCard
        v-for="movie in popularMovies"
        :movie="movie"
        :key="movie.id"
        :URL="imageBase"
      />
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getPopularMovies, loadMovieURL } from "../composables/useSearch";
import MovieCard from "./MovieCard.vue";
const popularMovies = ref([]);
const imageBase = ref("");

onMounted(async () => {
  const { base_url, image_size } = await loadMovieURL();
  imageBase.value = base_url + image_size;

  popularMovies.value = await getPopularMovies();
  console.log(imageBase.value);
});
</script>
