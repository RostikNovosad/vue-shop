<template>
  <div class="flex items-center">
    <div ref="prev" class="hidden lg:flex swiper-button-prev bg-slate-50 border-rounded">
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 11L1 6L6 1"
          stroke="#C8C8C8"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <swiper
      :slides-per-view="1"
      :space-between="50"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :loop="true"
      :modules="modules"
      :autoplay="{
        delay: 2500,
      }"
    >
      <swiper-slide><img src="/slide.png" alt="" class="mx-auto lg:px-2.5" /></swiper-slide>
      <swiper-slide><img src="/slide2.png" alt="" class="mx-auto lg:px-2.5" /></swiper-slide>
    </swiper>
    <div ref="next" class="hidden lg:flex swiper-button-next bg-slate-50 border-rounded">
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 0.999999L6 6L1 11"
          stroke="#C8C8C8"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Autoplay, Navigation],
      prev,
      next,
    };
  },
};
</script>
