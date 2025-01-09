<script setup>
import { inject } from 'vue';

const filters = inject('filters');

function changeInput(e) {
  filters.sortBy = e.target.value;
}
function changeSearchQuery(e) {
  filters.searchQuery = e.target.value;
}
</script>

<template>
  <div class="search-block mr-auto sm:ml-auto sm:mr-0 relative flex gap-4">
    <select
      @change="changeInput"
      name=""
      id=""
      class="border border-gray-300 rounded-xl py-2 px-3 w-40 focus:outline-none focus:border-gray-500"
    >
      <option value="title">По назві</option>
      <option value="price">По ціні (дешевші)</option>
      <option value="price&order=desc">По ціні (дорожчі)</option>
    </select>
    <input
      type="text"
      placeholder="Пошук"
      class="border border-gray-300 rounded-xl py-2 px-3 w-40 sm:w-50 focus:outline-none focus:border-gray-500"
      @input="changeSearchQuery"
    />
    <img src="/search-icon.svg" alt="" class="absolute top-2/4 right-3 -translate-y-2/4" />
  </div>
</template>
