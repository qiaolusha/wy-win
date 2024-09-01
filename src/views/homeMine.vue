<script setup>
import playButton from '@/component/playButton.vue'
import mineTop from '@/component/mine/mineTop.vue'
import mineMid from '@/component/mine/mineMid.vue'
</script>

<template>
  <mineTop />
  <mineMid />
  <playButton :ifShow="true" />
</template>

<style scoped></style>
