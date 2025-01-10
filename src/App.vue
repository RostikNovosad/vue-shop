<script setup>
import { ref, provide } from 'vue';
import Header from './components/Header.vue';
import Home from './pages/Home.vue';

let cart = ref([]);
let favorite = ref([]);

function addToCart(item) {
  cart.value.push(item);
  console.log('cart: ', cart.value);
}

const addToFavorite = (item) => {
  if (!favorite.value.includes(item)) {
    favorite.value.push(item);
  } else {
    favorite.value.splice(favorite.value.indexOf(item), 1);
  }
};

const totalCart = () => {
  let total = cart.value.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return total;
};

provide('cart', cart);
provide('favorite', favorite);
provide('addToCart', addToCart);
provide('addToFavorite', addToFavorite);
provide('totalCart', totalCart);
</script>

<template>
  <div class="h-full w-full bg-emerald-400 p-2 sm:px-4 sm:py-6 md:p-10 lg:p-14">
    <div
      class="min-h-screen-minus-16 sm:min-h-screen-minus-48 md:min-h-screen-minus-80 lg:min-h-screen-minus-112 bg-white h-full rounded-xl md:rounded-2xl"
    >
      <Header />
      <div class="p-3 md:p-10">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
