<script setup>
import { onMounted, reactive, watch, ref, provide, inject } from 'vue';

import Slider from '../components/Slider.vue';
import CardList from '../components/CardList.vue';
import SearchInput from '../components/SearchInput.vue';
import axios from 'axios';
let items = ref([]);

let filters = reactive({
  sortBy: 'title',
  orderBy: '',
  searchQuery: '',
});
const fetchItems = async () => {
  try {
    const response = await axios.get(
      `https://677034a52ffbd37a63cc63c7.mockapi.io/items?sortBy=${filters.sortBy}&search=${filters.searchQuery}`,
    );
    console.log(response.data);
    items.value = response;
  } catch (error) {
    console.log(error);
  }
};
const cart = inject('cart');

provide('filters', filters);

onMounted(() => {
  fetchItems();
});
watch(filters, fetchItems);
</script>

<template>
  <Slider />
  <div class="flex flex-col gap-4 sm:flex-row justify-between sm:items-center my-6 sm:my-10">
    <h2 class="text-2xl font-bold">Кросівки</h2>
    <SearchInput />
  </div>
  <CardList :items="items.data" :cart="cart.value" />
</template>
