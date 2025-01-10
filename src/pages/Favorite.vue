<script setup>
import { computed, inject } from 'vue';
import FavoriteList from '@/components/FavoriteList.vue';
const favorite = inject('favorite');

const showFavorite = computed(() => {
  return favorite.value.length > 0;
});
</script>

<template>
  <h2 class="text-2xl font-bold mb-10">Улюблене</h2>
  <FavoriteList />
  <div v-if="!showFavorite" class="flex flex-col gap-8 justify-center items-center mt-6">
    <h3 class="text-xl font-medium">Ваша список порожній!</h3>
    <img src="/public/empty-wishlist.png" alt="Пуста корзина" class="w-80" />
  </div>
</template>
