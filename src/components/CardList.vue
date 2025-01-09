<script setup>
import Card from './Card.vue';
defineProps({
  items: Array,
});
</script>

<template>
  <div
    class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
    v-auto-animate
  >
    <Card
      v-for="item in items"
      :item="item"
      :title="item.title"
      :price="item.price"
      :image="item.imageUrl"
      :is-favorite="false"
      :is-added="false"
      :id="item.id"
    />
  </div>
</template>
