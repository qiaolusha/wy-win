<script setup>
import { useMusicStore } from '@/stores/songs.js'
import { computed, ref } from 'vue'
const store = useMusicStore()
const playList = computed(() => store.playList)
const playListIndex = computed(() => store.playListIndex)
const noPlay = computed(() => store.noPlay)
const curSong = computed(() => {
  const curIndex = playListIndex
  const curSong = playList.value[curIndex.value]
  return curSong
})

const audio = ref(null)
// onMounted(() => {
//   console.log(audio)
// })
function play() {
  if (audio.value.paused) {
    audio.value.play()
    store.updateNoPlay(false)
  } else {
    audio.value.pause()
    store.updateNoPlay(true)
  }
}
import { defineProps } from 'vue'
const props = defineProps({
  ifShow: {
    type: Boolean,
    required: true
  }
})
// console.log(props.ifShow)
</script>

<template>
  <div class="win-box">
    <div class="win-play">
      <RouterLink
        :to="{
          path: '/songDetails',
          query: { id: curSong.id }
        }"
      >
        <span class="win-img"><img :src="curSong.al.picUrl" alt="" /></span>
        <span class="win-name">{{ curSong.name }}</span></RouterLink
      >
      <svg class="win-bficon" aria-hidden="true" v-if="noPlay" @click="play">
        <use xlink:href="#icon-shixinxiaosanjiao-copy"></use></svg
      ><svg class="win-zticon" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-bofang1"></use></svg
      ><svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-xuanxiang"></use>
      </svg>
    </div>
    <div class="win-home" v-if="ifShow">
      <svg @click="$router.push('/HomeView')" class="win-hicon" aria-hidden="true">
        <use xlink:href="#icon-tab-wang-yiyun"></use></svg
      ><svg class="win-hicon" aria-hidden="true">
        <use xlink:href="#icon-boke1-copy"></use></svg
      ><svg @click="$router.push('/logIn')" class="win-hicon" aria-hidden="true">
        <use xlink:href="#icon-yinlefu"></use></svg
      ><svg class="win-hicon" aria-hidden="true">
        <use xlink:href="#icon-guanzhu"></use></svg
      ><svg @click="$router.push('/homeFind')" class="win-hicon" aria-hidden="true">
        <use xlink:href="#icon-zimu-M"></use>
      </svg>
    </div>
  </div>
  <audio
    ref="audio"
    :src="`https://music.163.com/song/media/outer/url?id=${curSong.id}.mp3`"
  ></audio>
</template>

<style scoped>
.win-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
}
.win-home {
  padding: 0.5rem;
  display: flex;
  height: 2.5rem;
  align-items: center;
  background-color: #fff;
}
.win-hicon {
  width: 3.5rem;
  height: 1.5rem;
}
.win-play {
  width: 100%;
  height: 3rem;
  background-color: white;
  display: flex;
  border-top: 1px solid #d4d4d4;
}
.win-bficon {
  width: 2rem;
  height: 3rem;
}
.win-zticon {
  width: 1.5rem;
  height: 3rem;
  margin-right: 0.5rem;
}
.win-icon {
  width: 1.2rem;
  height: 3rem;
}
img {
  width: 2rem;
  height: 2rem;
}
span {
  display: inline-block;
}
.win-img {
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  overflow: hidden;
  margin: 0.6rem 0.5rem 0 0.5rem;
}
.win-name {
  width: 11.5rem;
  height: 3rem;
  line-height: 3rem;
}
a {
  text-decoration: none;
  color: #000;
  display: flex;
}
</style>
