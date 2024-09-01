<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getBanner } from '@/api/request/home.js'

const state = ref({
  images: [],
  currentIndex: 0,
  interval: null
})

const fetchBanners = async () => {
  let res = await getBanner()
  state.value.images = res.data.banners
  startAutoPlay()
}

onMounted(async () => {
  await fetchBanners()
})

onUnmounted(() => {
  clearInterval(state.value.interval)
})

const startAutoPlay = () => {
  if (state.value.images.length > 1) {
    state.value.interval = setInterval(() => {
      nextImage()
    }, 6000) // 每6秒切换一次图片
  }
}

const nextImage = () => {
  state.value.currentIndex = (state.value.currentIndex + 1) % state.value.images.length
}

const prevImage = () => {
  state.value.currentIndex =
    (state.value.currentIndex - 1 + state.value.images.length) % state.value.images.length
}
</script>

<template>
  <div class="win-banner">
    <ul class="win-list">
      <li
        class="win-item"
        v-for="(image, index) in state.images"
        :key="image.id"
        :class="{ active: index === state.currentIndex }"
      >
        <img :src="image.pic" alt="" />
      </li>
    </ul>
    <!-- 添加左右切换按钮 -->
    <span class="win-button">
      <svg class="win-zicon" aria-hidden="true" @click="prevImage">
        <use xlink:href="#icon-xiaozuojiantou"></use>
      </svg>
      <svg class="win-yicon" aria-hidden="true" @click="nextImage">
        <use xlink:href="#icon-xiaoyoujiantou"></use></svg
    ></span>
  </div>
</template>

<style scoped>
.win-list {
  width: 16.5rem;
  overflow: hidden;
  margin: 0;
  padding-left: 1rem;
}
.win-item {
  display: none;
  top: 0;
  left: 0;
  width: 16.5rem;
  height: 8rem;
}
.win-item img {
  width: 16.5rem;
  height: 8rem;
}

.win-item.active {
  display: block;
}
.win-button {
  display: flex;
  justify-content: flex-end;
}
.win-zicon,
.win-yicon {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}
</style>
