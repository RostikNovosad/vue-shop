<script setup>
import { computed, inject } from 'vue';
import CartList from '@/components/CartList.vue';
const cart = inject('cart');

const totalCart = inject('totalCart');
const showTotalCart = computed(() => {
  return cart.value.length > 0;
});
</script>

<template>
  <div class="flex items-center justify-between mb-10">
    <h2 class="text-2xl font-bold">Корзина</h2>
    <div v-show="showTotalCart">
      <p class="text-right text-xl">
        До сплати: <span class="font-bold">{{ totalCart() }} $</span>
      </p>
    </div>
  </div>
  <div v-if="!showTotalCart" class="flex flex-col gap-8 justify-center items-center mt-16">
    <h3 class="text-xl font-medium">Ваша корзина порожня!</h3>
    <img src="/public/package-icon.png" alt="Пуста корзина" class="w-68" />
  </div>

  <CartList />
</template>
