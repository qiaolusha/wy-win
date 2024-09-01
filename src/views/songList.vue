<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getDetails } from '@/api/request/listdetails'
import topNav from '@/component/details/topNav.vue'
import musicList from '@/component/details/musicList.vue'
import playButton from '@/component/playButton.vue'
const state = ref({
  playlist: {} // 歌单详情页
})

onMounted(async () => {
  let id = useRoute().query.id
  // console.log(id)
  // 获取歌单详情页
  let res = await getDetails(id)
  // console.log(res)
  state.value.playlist = res.data.playlist
})
</script>

<template>
  <topNav :playlist="state.playlist" />
  <musicList :playlist="state.playlist" />
  <playButton />
</template>

<style scoped></style> 
 