<script setup>
import { ref, onMounted } from 'vue'
import { getRecommend } from '@/api/request/home.js'
import { RouterLink } from 'vue-router'
let reclist = ref([])
onMounted(async () => {
  let res = await getRecommend()
  // console.log(res)
  reclist.value = res.data.result
  // console.log()
})
function transPlay(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿'
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  }
}
</script>

<template>
  <div class="win-mtop">
    <h4>推荐歌单</h4>
    <span class="win-icon">
      <svg class="win-licon" aria-hidden="true">
        <use xlink:href="#icon-jiantou"></use>
      </svg>
      <svg class="win-ricon" aria-hidden="true">
        <use xlink:href="#icon-sandian"></use>
      </svg>
    </span>
  </div>
  <div class="win-music">
    <ul class="win-slide">
      <li v-for="item in reclist" :key="item">
        <RouterLink :to="{ path: '/songList', query: { id: item.id } }">
          <span class="win-img"> <img :src="item.picUrl" alt="" /></span>

          <!-- 图标 -->
          <svg class="win-bficon" aria-hidden="true">
            <use xlink:href="#icon-shixinxiaosanjiao"></use>
          </svg>
          <!-- 播放量 -->
          <h6>{{ transPlay(item.playCount) }}</h6>

          <!-- 名字 -->
          <span class="win-name">{{ item.name }}</span>
          <svg class="win-bficon2" aria-hidden="true">
            <use xlink:href="#icon-shixinxiaosanjiao"></use>
          </svg>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.win-bficon2 {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 3rem;
  left: 3rem;
}
.win-bficon {
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0.1rem;
  right: 2.5rem;
}
h6 {
  display: inline-block;
  margin: 0;
  position: absolute;
  color: white;
  top: 0.3rem;
  left: 2.3rem;
  font-size: 12px;
  font-weight: normal;
}
.win-slide li {
  align-items: center;
  height: 10rem;
  list-style-type: none;
  flex-wrap: nowrap;
  margin-right: 0.5rem;
  position: relative;
}
.win-slide {
  display: flex;
  overflow-x: auto;
  margin: 0;
  padding-left: 1rem;
}
.win-name {
  font-size: 13px;
}
img {
  width: 5rem;
}
.win-img {
  border-radius: 13px;
  overflow: hidden;
  display: inline-block;
  width: 5rem;
  height: 5rem;
}
h4 {
  display: inline-block;
  width: 4.5rem;
  margin: 1rem;
  margin-right: 0;
}
.win-mtop {
  vertical-align: middle;
  position: relative;
}

.win-licon {
  width: 1rem;
  height: 1rem;
  margin-right: 10.8rem;
}
.win-ricon {
  width: 1rem;
  height: 1rem;
}

.win-icon {
  display: inline-block;
  position: absolute;
  top: 1rem;
  right: 0.5rem;
}
</style>
