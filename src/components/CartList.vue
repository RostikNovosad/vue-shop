<script setup>
import { inject } from 'vue';
import Card from './Card.vue';

const cart = inject('cart');
const removeFromCart = (item) => {
  cart.value.splice(
    cart.value.findIndex((el) => el.id === item.id),
    1,
  );
};
</script>

<template>
  <div
    class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
    v-auto-animate
  >
    <Card
      v-for="item in cart"
      :item="item"
      :title="item.title"
      :price="item.price"
      :image="item.imageUrl"
      :id="item.id"
      :is-remove="true"
      :remove="removeFromCart"
    />
  </div>
</template>
