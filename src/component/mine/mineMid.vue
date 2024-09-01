<script setup>
import { getUserSub } from '@/api/request/mine.js'
import { ref, onMounted } from 'vue'
let user = ref([])
onMounted(async () => {
  let res = await getUserSub()
  user.value = res.data.playlist.slice(2, 31)
  // console.log(user)
})
</script>

<template>
  <div class="win-bg">
    <div class="win-box">
      <span class="win-sc">收藏歌单</span>
      <div v-for="item in user" :key="item.id" class="win-li">
        <RouterLink :to="{ path: '/songList', query: { id: item.id } }">
          <span
            ><span class="win-cimg"><img :src="item.coverImgUrl" alt="" /></span>
            <span class="win-name"
              >{{ item.name
              }}<span class="win-nname"
                >{{ item.trackCount }}首,by{{ item.creator.nickname }}</span
              ></span
            ></span
          ><svg class="win-icon" aria-hidden="true">
            <use xlink:href="#icon-sandian-copy-copy"></use></svg
        ></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #000;
}
.win-cimg {
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 0.5rem 0.5rem 0;
}
.win-cimg img {
  width: 2.5rem;
  height: 2.5rem;
}
.win-box {
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.5rem;
}
.win-li {
  display: flex;
}
.win-bg {
  background-color: #f5f5f5;
}
.win-name {
  width: 10rem;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.win-nname {
  font-size: 13px;
  color: #8b8b8b;
  display: block;
}
.win-icon {
  width: 1.5rem;
  height: 2.5rem;
  margin-left: 1rem;
}
.win-sc {
  font-size: 13px;
  color: #676767;
  margin: 1rem 0.5rem 0;
}
</style>
