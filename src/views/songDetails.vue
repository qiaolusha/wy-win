<script setup>
import reCord from '@/component/lyric/reCord.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getSongDetail } from '@/api/request/listdetails.js'
const state = ref({
  cursong: {}, // 歌曲详情
  songId: {}
})
onMounted(async () => {
  const id = useRoute().query.id
  const songid = ref(useRoute().query.id)
  // console.log(songid)
  state.value.songId = songid.value
  // console.log(state.value.songId)
  // console.log(typeof id)
  // console.log(state.value.noPlay)
  // console.log(id)
  // 获取歌曲详情
  const res = await getSongDetail(id)
  state.value.cursong = res.data.songs
  // console.log(state.value.cursong)
})
</script>

<template>
  <reCord :cursong="state.cursong" :songId="state.songId" />
</template>

<style scoped></style>
