<template>
  <div>
    <article class="movie-card">
      <div class="img-container mb-1">
        <img
          :src="`${URL + movie.poster_path}`"
          alt=""
          class="img-fluid w-100"
        />
      </div>
      <h4 class="title mb-1 p-0 ps-1">{{ movie.title }}</h4>
      <p class="date p-0 ps-1">{{ movie.release_date }}</p>
    </article>
  </div>
</template>

<script setup>
defineProps(["movie", "URL"]);
</script>

<style scoped></style>
