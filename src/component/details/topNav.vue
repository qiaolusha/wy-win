<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  playlist: {
    type: Object,
    required: true
  }
})
// console.log(props.playlist)
function transPlay(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿'
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  } else {
    return num
  }
}
</script>

<template>
  <!-- 用v-if持久化数据储存 -->

  <div class="win-top">
    <svg class="win-icon" aria-hidden="true" @click="$router.back()">
      <use xlink:href="#icon-zuojiantou-copy"></use>
    </svg>
    <span class="win-gd">歌单</span>
    <svg class="win-icon" aria-hidden="true">
      <use xlink:href="#icon-BAI-fangdajing-copy"></use>
    </svg>
    <svg class="win-icon" aria-hidden="true">
      <use xlink:href="#icon-sandian-copy"></use>
    </svg>
  </div>
  <div class="win-mid">
    <span class="win-coverh">
      <img class="win-cover" :src="playlist.coverImgUrl" alt=""
    /></span>
    <div class="win-y">
      <span class="win-name">{{ playlist.name }}</span>
      <span class="win-zz" v-if="playlist.creator"
        ><span class="win-photo"
          ><img :src="playlist.creator.avatarUrl" alt="" /></span
        >&nbsp;&nbsp;{{ playlist.creator.nickname }}</span
      >
      <span class="win-detail">{{ playlist.description }}</span>
    </div>
    <div class="win-feature">
      <span class="win-zf"
        ><svg class="win-ficon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang-copy"></use></svg
        ><span class="win-count">{{
          transPlay(playlist.shareCount)
        }}</span></span
      ><span class="win-pl"
        ><svg class="win-ficon" aria-hidden="true">
          <use xlink:href="#icon-duihuaqipao3"></use></svg
        ><span class="win-count">{{
          transPlay(playlist.commentCount)
        }}</span></span
      ><span class="win-sc"
        ><svg class="win-ficon" aria-hidden="true">
          <use xlink:href="#icon-shoucang"></use></svg
        ><span class="win-count">{{
          transPlay(playlist.subscribedCount)
        }}</span></span
      >
    </div>
  </div>
  <img class="win-bg" :src="playlist.coverImgUrl" alt="" />
  <img class="win-bg" :src="playlist.coverImgUrl" alt="" />
  <img class="win-bg" :src="playlist.coverImgUrl" alt="" />
</template>

<style scoped>
.win-top {
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  height: 3rem;
}
.win-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.6rem;
}
.win-gd {
  color: white;
  width: 11rem;
  height: 1.5rem;
  margin-top: 0.8rem;
  font-size: 20px;
}
.win-bg {
  position: fixed;
  width: 100%;
  height: 12rem;
  top: 0px;
  z-index: -1;
  filter: blur(150px) contrast(200%) brightness(30%);
}
.win-cover {
  width: 5rem;
  height: 5rem;
}
.win-coverh {
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  width: 5rem;
  height: 5rem;
  margin-left: 1rem;
  margin-top: 1rem;
}
.win-mid {
  position: relative;
}
.win-y {
  display: flex;
  width: 10rem;
  font-size: 17px;
  color: white;
  margin-left: 1rem;
  position: absolute;
  top: 1rem;
  left: 6rem;
  flex-direction: column;
}

.win-photo {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0.5rem 0;
}
.win-photo img {
  width: 1.5rem;
}
.win-detail {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #cac9c9;
}
.win-zz {
  font-size: 13px;
  color: #cac9c9;
}
.win-feature {
  display: flex;
  justify-content: space-around;
}
.win-feature span {
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  margin-top: 1rem;
  color: white;
  font-size: 12px;
}
.win-ficon {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
}
.win-pl,
.win-zf,
.win-sc {
  position: relative;
}
.win-pl .win-count,
.win-zf .win-count,
.win-sc .win-count {
  font-size: 13px;
  background-color: transparent;
  position: absolute;
}
</style>
