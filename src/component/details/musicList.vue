<script setup>
import { defineProps } from 'vue'
import { useMusicStore } from '@/stores/songs.js'
const props = defineProps({
  playlist: {
    type: Object,
    required: true
  }
})

// console.log(props)
const store = useMusicStore()
function playMus(i) {
  store.updatePlayList(props.playlist.tracks)
  store.updateplayListIndex(i)
}
</script>

<template>
  <div class="win-box">
    <div class="win-bf">
      <svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <div class="win-font">播放全部</div>
      <svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai"></use>
      </svg>
      <svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-xuanxiang"></use>
      </svg>
    </div>
    <div class="win-songs" v-for="(track, index) in playlist.tracks" :key="track.id">
      <div class="win-count" @click="playMus(index)">{{ index + 1 }}</div>
      <div class="win-name" @click="playMus(index)">
        <span class="win-sname">{{ track.name }}</span
        ><br /><span class="win-aname" v-for="ar in track.ar" :key="ar.id">{{ ar.name }}/</span>
      </div>
      <svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-sandian-copy-copy"></use>
      </svg>
    </div>
  </div>
</template>

<style scoped>
div,
span {
  display: inline-block;
}
.win-box {
  width: 100%;
  height: 55rem;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 0 0;
  margin-top: 1rem;
}
.win-bf {
  width: 100%;
  height: 3.5rem;
  display: flex;
}
.win-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
}
.win-font {
  line-height: 3.4rem;
  width: 8rem;
}
.win-songs {
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
}
.win-count {
  width: 3rem;
  height: 3rem;
  color: #989898;
  text-align: center;
  line-height: 3rem;
  font-size: 18px;
  vertical-align: middle;
}
.win-aname {
  font-size: 15px;
  color: #989898;
}
.win-name {
  width: 12rem;
}
</style>
