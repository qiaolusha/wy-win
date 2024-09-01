<script setup>
import playButton from '@/component/playButton.vue'
import findTop from '@/component/find/findTop.vue'
import findList from '@/component/find/findList.vue'
</script>

<template>
  <findTop />
  <findList />
  <playButton :ifShow="true" />
</template>

<style scoped></style>
