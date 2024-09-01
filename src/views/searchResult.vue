<script setup>
import { useRoute } from 'vue-router'
// import { onMounted, ref } from 'vue'
import resultPage from '@/component/search/resultPage.vue'
import playButton from '@/component/playButton.vue'
let router = useRoute()

let word = router.query.keyWord
console.log(word)
</script>

<template>
  <resultPage v-if="word" :word="word" />
  <playButton />
</template>

<style scoped></style>
