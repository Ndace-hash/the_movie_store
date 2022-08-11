<template>
  <header class="my-5">
    <div
      class="container-md header-container align-items-center d-flex flex-column py-2"
    >
      <h1 class="mb-3">the<span>movie</span>store</h1>
      <input
        type="search"
        name="search"
        id="search-bar"
        placeholder="movie, TV show, genre..."
        v-model="searchQuery"
      />
    </div>
  </header>
</template>

<script setup>
import { searchQuery } from "../composables/useSearch";
</script>
