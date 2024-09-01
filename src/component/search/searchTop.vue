<script setup>
import { getDefault } from '@/api/request/search.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let def = ref(null)
onMounted(async () => {
  let res = await getDefault()
  // console.log(res)
  def.value = res.data.data.realkeyword
})
const keyWord = ref('')
const goToSearchResult = () => {
  router.push({ path: '/searchResult', query: { keyWord: keyWord.value } })
}
</script>

<template>
  <div class="win-top1">
    <svg class="win-zicon" aria-hidden="true" @click="$router.back()">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" v-model="keyWord" />
    <span class="win-ss" @click="goToSearchResult">搜索</span>
  </div>
  <div class="win-top2">
    <span class="win-box"
      ><svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-xiaoren"></use></svg
      >歌手</span
    ><span class="win-box"
      ><svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-yuedu"></use></svg
      >曲风</span
    ><span class="win-box"
      ><svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-yinfu"></use></svg
      >专区</span
    ><span class="win-box"
      ><svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-maikefeng"></use></svg
      >识曲</span
    >
  </div>
  <div class="win-top3">
    <span class="win-guess"
      >猜你喜欢<svg class="win-gicon" aria-hidden="true">
        <use xlink:href="#icon-shuaxin"></use></svg
    ></span>
    <span class="win-def">{{ def }}</span>
  </div>
</template>

<style scoped>
.win-top1 {
  display: flex;
}
.win-zicon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
}
input {
  height: 1.5rem;
  width: 12rem;
  border-radius: 6rem;
  border: 1px solid #f3f3f3;
  margin-top: 0.5rem;
  background-color: #f3f3f3;
}
.win-ss {
  margin: 0.6rem;
}
.win-icon {
  width: 1rem;
  height: 1rem;
  padding-right: 0.3rem;
}
.win-top2 {
  font-size: 18px;
  text-align: center;
  align-items: middle;
  display: flex;
  margin: 0.8rem auto;
}
.win-box {
  width: 4rem;
  height: 1rem;
  margin: 0.3rem;
  border-right: 1px solid #cacaca;
}
.win-top3 {
  width: 100%;
  height: 6rem;
  background-color: #f6f6f6;
}
.win-guess {
  padding: 1rem;
  font-size: 18px;
  display: block;
}
.win-gicon {
  width: 2rem;
  height: 0.7rem;
}
.win-def {
  margin-left: 1rem;
  padding: 0.3rem;
  color: #828282;
  font-size: 18px;
  border: 1px solid white;
  border-radius: 35%;
  background-color: #fff;
}
</style>
