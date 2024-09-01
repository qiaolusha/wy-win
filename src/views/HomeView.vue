<script>
import TopNav from '@/component/home/TopNav.vue'
import SlideShow from '@/component/home/SlideShow.vue'
import IconLine from '@/component/home/IconLine.vue'
import RecPlaylist from '@/component/home/RecPlaylist.vue'
import playButton from '@/component/playButton.vue'

export default {
  components: {
    TopNav,
    SlideShow,
    IconLine,
    RecPlaylist,
    playButton
  }
}
</script>

<template>
  <TopNav></TopNav>
  <SlideShow />
  <IconLine />
  <RecPlaylist />
  <playButton :ifShow="true" />
  <RouterView />
</template>

<style scoped></style>
