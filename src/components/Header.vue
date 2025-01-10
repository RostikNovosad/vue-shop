<script setup>
import { inject, computed } from 'vue';

const cart = inject('cart');
const favorite = inject('favorite');
const totalCart = inject('totalCart');

const checkCart = computed(() => {
  return cart.value.length > 0 ? `${totalCart()} $` : 'Корзина';
});
const checkFavorite = computed(() => {
  return favorite.value.length > 0 ? `Вподобані: ${favorite.value.length}` : 'Улюблене';
});
</script>

<template>
  <div class="w-full border-b border-b-gray-400 p-6 md:p-10 flex justify-between" id="header">
    <RouterLink to="/">
      <div class="logo flex gap-3">
        <img src="/logo.png" alt="logo" class="w-12" />
        <div class="flex flex-col">
          <h2 class="font-bold">Sneakers</h2>
          <p class="text-slate-500">Магазин кросівок</p>
        </div>
      </div>
    </RouterLink>
    <ul class="navigation flex gap-4 md:gap-8">
      <RouterLink class="flex items-center gap-2.5" to="/cart">
        <img src="/cart.svg" alt="cart-icon" />
        <p class="text-slate-500 font-normal hidden sm:block">
          {{ checkCart }}
        </p>
      </RouterLink>
      <RouterLink class="flex items-center gap-2.5" to="/favorite">
        <img src="/favorite.svg" alt="favorite-icon" />
        <p class="text-slate-500 font-normal hidden sm:block">
          {{ checkFavorite }}
        </p>
      </RouterLink>

      <!-- <li class="flex items-center gap-2.5">
        <img src="/profile.svg" alt="profile-icon" />
        <p class="text-slate-500 font-normal hidden sm:block">Профіль</p>
      </li> -->
    </ul>
  </div>
</template>
