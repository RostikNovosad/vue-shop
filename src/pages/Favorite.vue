<script setup>
import { onMounted, inject } from 'vue';
import FavoriteList from '@/components/FavoriteList.vue';
const favorite = inject('favorite');

onMounted(() => {
  console.log(favorite.value);
});
</script>

<template>
  <h2 class="text-2xl font-bold mb-10">Улюблене</h2>
  <FavoriteList />
</template>
