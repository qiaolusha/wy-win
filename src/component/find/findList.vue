<script setup>
import { getVideos } from '@/api/request/video.js'
import { ref, onMounted } from 'vue'
let vlist = ref([])
// // let vlistIds = ref([])
// // let videos = ref([])
onMounted(async () => {
  let res = await getVideos()
  vlist.value = res.data.datas
  console.log(vlist)
})
// onMounted(async () => {
//   let res = await getVideos()
//   console.log(res)
// let rea = await getVideo()
// console.log(rea)
// vlist.value = res.data.data
// console.log(vlist.value)
// vlist.value.forEach((item) => {
//   vlistIds.value.push(item.id)
// })
// vlistIds.value = vlistIds.value.slice(0, 30)
// console.log(vlistIds.value)
// for (let id of vlistIds.value) {
//   let video = await getVideo(id)
//   videos.value.push(video)
// }
// console.log(videos.value)
// })
</script>

<template>
  <div class="win-page">
    <div v-for="item in vlist" :key="item.id">
      <div class="win-box">
        <span
          ><span class="win-ibox"
            ><img :src="item.data.creator.avatarUrl" alt="" class="win-aimg"
          /></span>
          <span class="win-nname">{{ item.data.creator.nickname }}</span></span
        ><span class="win-ibox2"><img :src="item.data.coverUrl" class="win-cimg" alt="" /></span
        ><span class="win-bu"
          ><span class="win-tit">{{ item.data.title }}</span
          ><svg class="win-picon" aria-hidden="true">
            <use xlink:href="#icon-good"></use></svg
          ><span>{{ item.data.praisedCount }}</span></span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.win-ibox {
  border-radius: 50%;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem 1rem;
}
.win-ibox2 {
  display: block;
}
.win-aimg {
  width: 2rem;
  height: 2rem;
}
.win-cimg {
  width: 100%;
  height: 9.5rem;
}
.win-page {
  background-color: #f5f5f5;
  width: 100%;
}
.win-box {
  width: 90%;
  background-color: #fff;
  margin: 0 auto 1rem auto;
  border-radius: 1rem;
  position: relative;
}
.win-nname {
  position: absolute;
  top: 1rem;
  font-size: 18px;
}
.win-picon {
  width: 1rem;
  height: 1rem;
  padding: 1rem 0.3rem 1rem 1rem;
}
.win-tit {
  width: 10rem;
  font-size: 18px;
  line-height: 20px;
}
.win-bu {
  display: flex;
  align-items: center;
}
</style>
