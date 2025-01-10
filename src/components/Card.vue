<script setup>
import { computed, inject, onMounted, ref } from 'vue';

const props = defineProps({
  item: Object,
  id: Number,
  title: String,
  image: String,
  price: Number,
  favorite: Array,
  isRemove: Boolean,
  remove: Function,
});

const isVisible = ref(false);
const favoriteCheck = computed(() => {
  return favorite.value.some((item) => item.id === props.id) ? '/like-2.svg' : '/like-1.svg';
});
const removeButton = ref(props.isRemove);
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
    <button @click="addToFavorite(item)" class="absolute top-4 left-4 z-50">
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
      <!-- button remove from cart -->
      <button class="" v-if="removeButton">
        <img @click="remove(item)" src="/remove.svg" alt="remove from cart" class="" />
      </button>
      <!-- button add to cart -->
      <button v-else @click="buttonHandler" class="relative">
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
