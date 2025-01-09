<script setup>
import { computed, inject, ref } from 'vue';

const props = defineProps({
  item: Object,
  id: Number,
  title: String,
  image: String,
  price: Number,
  favorite: Array,
});

const isVisible = ref(false);
const favoriteCheck = computed(() => {
  return favorite.value.includes(props.id) ? '/like-2.svg' : '/like-1.svg';
});

const changeImage = () => {
  isVisible.value = !isVisible.value;

  setTimeout(() => {
    isVisible.value = !isVisible.value;
  }, 1000);
};

const buttonHandler = () => {
  addToCart(props.item);
  changeImage();
};

const cart = inject('cart');
const favorite = inject('favorite');
const addToCart = inject('addToCart');
const addToFavorite = inject('addToFavorite');
</script>

<template>
  <div
    class="flex flex-col gap-3 px-5 py-4 border border-slate-200 rounded-3xl hover:scale-105 ease-in duration-150 relative"
  >
    <button @click="addToFavorite(id)" class="absolute top-4 left-4 z-50">
      <img
        :src="favoriteCheck"
        alt="like icon"
        class="transition-opacity duration-300 ease-in-out"
      />
    </button>
    <img :src="image" :alt="title" class="" />
    <h4 class="flex-auto">{{ title }}</h4>
    <div class="flex justify-between">
      <p class="font-bold">{{ price }} $</p>
      <button @click="buttonHandler" class="relative">
        <img src="/plus.svg" alt="" class="relative" />
        <img
          src="/checked.svg"
          alt=""
          class="absolute top-0 left-0 z-50 transition-opacity ease-in-out duration-200"
          :class="{ 'opacity-0': !isVisible, 'opacity-1': isVisible }"
        />
      </button>
    </div>
  </div>
</template>
