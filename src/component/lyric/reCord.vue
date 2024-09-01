<script setup>
import { computed, defineProps, ref, watch } from 'vue'
import { useMusicStore } from '@/stores/songs.js'
import { getSongLyric, getSongComment } from '@/api/request/listdetails.js'
const props = defineProps({
  cursong: {
    type: Object,
    default: () => ({})
  },
  songId: {
    type: String
  }
})
const curUrl = computed(() => {
  const curUrl = `https://music.163.com/song/media/outer/url?id=${props.songId}.mp3`
  return curUrl
})
const songid = ref(props.songId)
// console.log(typeof props.noplay)
const i = 0
const audio = ref(null)

const store = useMusicStore()
const noplay = computed(() => store.noplay)

function play() {
  if (audio.value.paused) {
    audio.value.play()
    store.updateNoplay(false)
  } else {
    audio.value.pause()
    store.updateNoplay(true)
  }
}

const lyr = ref()
const comments = ref()
const getLyric = () => {
  if (songid.value) {
    getSongLyric(songid.value).then((res) => {
      if (res && res.status === 200) {
        lyr.value = res.data.lrc.lyric
        // console.log(lyr.value)
      }
    })
  }
}
const getComment = () => {
  if (songid.value) {
    getSongComment(songid.value).then((res) => {
      if (res && res.status === 200) {
        comments.value = res.data.comments
        console.log(comments.value)
      }
    })
  }
}

// 监听songId的变化，并在变化时重新获取歌词,否则一刷新页面就报错
watch(
  () => props.songId,
  (newSongId) => {
    songid.value = newSongId
    getLyric()
    getComment()
  }
)

let cd_lyr = ref('true')
function ifshow() {
  if (cd_lyr.value === true) {
    cd_lyr.value = false
  } else {
    cd_lyr.value = true
  }
}
</script>

<template>
  <div class="win-box">
    <img
      class="win-bgimg"
      v-if="cursong && cursong.length > i && cursong[i].al.picUrl"
      :src="cursong[i].al.picUrl"
      alt=""
    />
    <div class="win-top">
      <span @click="$router.back()"
        ><svg class="win-icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou-copy"></use></svg
      ></span>
      <div class="win-title">
        <span class="win-sname" v-if="cursong && cursong.length > i && cursong[i].name">
          {{ cursong[i].name }}</span
        >
        <span class="win-ar" v-if="cursong && cursong.length > i && cursong[i].ar[i].name"
          >{{ cursong[i].ar[i].name
          }}<svg class="win-aicon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-copy"></use></svg
        ></span>
      </div>
      <span
        ><svg class="win-icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang1"></use></svg
      ></span>
    </div>
    <div class="win-middle" v-if="cd_lyr" @click="ifshow">
      <img class="win-ne" src="@/assets/needle.png" :class="{ win_ne2: !noplay }" />
      <div class="win-ccd">
        <img
          class="win-cdimg"
          :class="{ win_cdimg_act: noplay, win_cdimg_pau: noplay }"
          v-if="cursong && cursong.length > i && cursong[i].al.picUrl"
          :src="cursong[i].al.picUrl"
          alt=""
        />
        <img
          class="win-cd"
          src="@/assets/cd.png"
          alt=""
          :class="{ win_cd_act: noplay, win_cd_pau: noplay }"
        />
      </div>
    </div>
    <div class="win-middle2" v-else @click="ifshow">
      {{ lyr }}
    </div>
    <div class="win-func">
      <svg class="win-ficon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use></svg
      ><svg class="win-ficon" aria-hidden="true">
        <use xlink:href="#icon-xiazai1"></use></svg
      ><svg class="win-ficon" aria-hidden="true">
        <use xlink:href="#icon-b_vip"></use></svg
      ><a href="#win1"
        ><svg class="win-ficon" aria-hidden="true">
          <use xlink:href="#icon-lianxiwomen"></use></svg></a
      ><a href="#win2"
        ><svg class="win-ficon" aria-hidden="true">
          <use xlink:href="#icon-sandian-copy-copy"></use></svg
      ></a>
    </div>
    <div class="win-play"><hr /></div>
    <div class="win-func2">
      <svg class="win-ficon" aria-hidden="true">
        <use xlink:href="#icon-bofang-xunhuanbofang"></use></svg
      ><svg class="win-ficon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige-copy"></use></svg
      ><svg class="win-ficon2" aria-hidden="true" v-if="noplay" @click="play">
        <use xlink:href="#icon-bofang2"></use>
      </svg>
      <svg class="win-ficon2" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-zanting"></use></svg
      ><svg class="win-ficon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou-copy"></use></svg
      ><svg class="win-ficon" aria-hidden="true">
        <use xlink:href="#icon-xuanxiang-copy"></use>
      </svg>
    </div>
  </div>
  <audio ref="audio" :src="curUrl"></audio>
  <!-- 弹窗1 评论-->
  <div id="win1" class="win-tc1">
    <div class="win-content1">
      <span class="win-tctop1">
        <a href="#"
          ><svg class="win-cicon" aria-hidden="true">
            <use xlink:href="#icon-zuojiantou"></use></svg></a
        ><span class="win-plq">评论区</span
        ><svg class="win-cicon" aria-hidden="true">
          <use xlink:href="#icon-sandian"></use></svg
      ></span>
      <div class="win-mid">
        <div v-for="item in comments" :key="item.id" class="win-box1">
          <div class="win-tit">
            <span class="win-tx"><img :src="item.user.avatarUrl" alt="" /></span
            ><span class="win-name"
              ><span class="win-nname">{{ item.user.nickname }}</span
              ><br /><span class="win-time">{{ item.timeStr }}</span></span
            ><span class="win-cou"
              >{{ item.likedCount
              }}<svg class="win-zicon" aria-hidden="true">
                <use xlink:href="#icon-good"></use></svg
            ></span>
          </div>

          <span class="win-con">{{ item.content }}</span
          ><span></span>
        </div>
      </div>
    </div>
  </div>
  <!-- 弹窗2 更多-->
  <div id="win2" class="win-tc2">
    <div class="win-content2">
      <a href="#"
        ><svg class="win-icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use></svg
      ></a>
    </div>
  </div>
</template>

<style scoped>
.win-top {
  display: flex;
}
.win-icon {
  width: 1.8rem;
  height: 1.8rem;
  margin: 0.8rem;
}
.win-ficon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.8rem;
}
.win-ficon2 {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.2rem 0.7rem;
}
.win-title {
  display: flex;
  flex-direction: column;
  width: 12rem;
  align-items: center;
  justify-content: center;
}
.win-aicon {
  width: 0.6rem;
  height: 0.6rem;
}
.win-sname {
  color: #ffffff;
  height: 1.5rem;
}
.win-ar {
  font-size: 15px;
  color: #dfdede;
}
.win-bgimg {
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(50px) brightness(70%);
}
.win-ne {
  width: 8rem;
  display: block;
  margin: 0.5rem auto;
  transform-origin: 0 0;
  transform: rotate(-13deg);
  transition: all 2s;
}
.win_ne2 {
  position: relative;
  width: 8rem;
  display: block;
  margin: 0.5rem auto;
  transform-origin: 0 0;
  transform: rotate(0deg);
  transition: all 2s;
  z-index: 100;
}
.win-cdimg {
  position: absolute;
  width: 9.6rem;
  top: -0.5rem;
  left: 4.5rem;
  animation: cd 10s linear infinite;
}
.win-cd {
  width: 15rem;
  position: absolute;
  top: -3rem;
  left: 1.8rem;
  z-index: 10;
  animation: cd 10s linear infinite;
}
.win_cd_act,
.win_cdimg_act {
  animation-play-state: running;
}
.win_cd_pau,
.win_cdimg_pau {
  animation-play-state: paused;
}
@keyframes cd {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.win-ccd {
  position: relative;
}
.win-func {
  position: absolute;
  bottom: 6rem;
  left: 1.5rem;
  display: flex;
  justify-content: center;
}
.win-func2 {
  position: absolute;
  bottom: 0.8rem;
  left: 1rem;
  display: flex;
  justify-content: center;
}
.win-middle {
  height: 25rem;
  z-index: 10;
}
.win-middle2 {
  color: rgb(218, 218, 218);
  width: 13rem;
  height: 18rem;
  overflow: hidden;
  margin: 1.5rem auto;
}
.win-play {
  width: 15rem;
  position: absolute;
  bottom: 4.5rem;
  left: 1.5rem;
}

.win-tc1 {
  position: absolute;
  top: 0;
  display: none; /*这里*/
  width: 100%;
  height: 100%;
  z-index: 30;
  text-align: center;
  animation: fadein 0.5s;
}
.win-tc1:target {
  display: block;
}
@keyframes fadein {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
.win-content1 {
  position: absolute;
  width: 100%;
  background-color: #fff;
  z-index: 30;
}
.win-tc2 {
  position: absolute;
  top: 0;
  display: none; /*这里*/
  width: 100%;
  height: 100%;
  z-index: 30;
  text-align: center;
  animation: fadein 0.5s;
}
.win-tc2:target {
  display: block;
}
.win-content2 {
  position: absolute;
  width: 100%;
  background-color: #fff;
  z-index: 30;
}
.win-cicon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem 1rem 0.5rem;
}
.win-tx {
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 1rem;
  margin: 0 1rem;
}
.win-tx img {
  width: 2rem;
}
.win-mid {
  margin-top: 4rem;
}
.win-tctop1 {
  display: flex;
  position: fixed;
  background-color: #fff;
}
.win-plq {
  width: 12rem;
  line-height: 3.5rem;
  text-align: left;
}
.win-tit {
  display: flex;
  margin: 1rem 0;
}
.win-zicon {
  width: 1rem;
  height: 1rem;
}
.win-cou {
  color: #7b7b7b;
  fill: #7b7b7b;
  margin-left: 3rem;
  padding-top: 0.5rem;
}
.win-name {
  width: 9rem;
  text-align: left;
}
.win-time {
  color: #777777;
  font-size: 16px;
}
.win-con {
  width: 13rem;
  margin-left: 2rem;
  margin-bottom: 1rem;
  text-align: left;
}
.win-box1 {
  border-bottom: 1px solid #e1e1e1;
}
</style>
