<script setup>
import { defineProps, ref } from 'vue'
import { getSearch } from '@/api/request/search.js'
// import { useMusicStore } from '@/stores/songs.js'
const props = defineProps({
  word: {
    type: String,
    required: true
  }
})
let keyword = ref(props.word)
const list = ref([])

const handleSearch = () => {
  getSearch(keyword.value).then((res) => {
    list.value = res.data.result.songs
    console.log(list.value)
  })
}

// 初始化时调用一次搜索
handleSearch()
</script>

<template>
  <div class="win-top">
    <span
      ><svg class="win-zicon" aria-hidden="true" @click="$router.back()">
        <use xlink:href="#icon-zuojiantou"></use></svg></span
    ><input type="text" v-model="keyword" />
    <span class="win-ss" @click="handleSearch"> 搜索 </span>
  </div>
  <div class="win-mid">
    <span class="win-zh">综合</span>
    <span class="win-zh">单曲</span>
    <span class="win-zh">歌单</span>
    <span class="win-zh">视频</span><span class="win-zh">歌手</span>
    <span class="win-zh">播客</span>
    <svg class="win-hicon" aria-hidden="true" @click="$router.back()">
      <use xlink:href="#icon-hengxian"></use>
    </svg>
  </div>
  <div class="win-list">
    <span class="win-dq">单曲精选</span>

    <ul v-for="item in list" :key="item.id">
      <li>
        <div class="win-l">
          <hr />
          <span>{{ item.name }}</span
          ><br />
          <span class="win-arname">
            {{ item.artists[0].name }}
            - {{ item.album.name }}
          </span>
        </div>
        <div class="win-r">
          <svg class="win-icon" aria-hidden="true" @click="$router.back()">
            <use xlink:href="#icon-yousanjiao"></use></svg
          ><svg class="win-icon" aria-hidden="true" @click="$router.back()">
            <use xlink:href="#icon-sandian-copy-copy"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.win-top {
  display: flex;
}
.win-zicon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
}
input {
  border: 1px solid #f2f2f2;
  height: 1.5rem;
  margin-top: 1rem;
  border-radius: 1rem;
  background-color: #f2f2f2;
  padding-left: 1rem;
}
.win-ss {
  height: 1.5rem;
  margin: 1.2rem 0 0 0.6rem;
}
.win-zh {
  width: 2.2rem;
  font-size: 18px;
  padding-left: 0.8rem;
}
.win-mid {
  position: relative;
}
.win-hicon {
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  left: 0.7rem;
  top: 0.4rem;
}
.win-list {
  width: 90%;
  background-color: #ffffff;
  margin: 1.5rem auto;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding-left: 1rem;
}
.win-dq {
  padding: 1rem 0 0.8rem 0;
  font-weight: bold;
}
hr {
  border: none;
  border-top: 1px solid #ebebeb;
  width: 90%;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  display: flex;
  align-items: center;
}
.win-l {
  display: inline-block;
  width: 70%;
}
.win-r {
  width: 25%;
}
.win-icon {
  padding-top: 1rem;
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;
}
.win-arname {
  font-size: 15px;
  color: #8d8d8d;
}
</style>
