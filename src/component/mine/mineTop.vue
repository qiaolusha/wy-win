<script setup>
import { getUserDetails } from '@/api/request/mine.js'
import { onMounted, ref } from 'vue'
let user = ref([])
onMounted(async () => {
  let res = await getUserDetails()
  user.value = res.data
  // console.log(user)
})
</script>

<template>
  <div class="win-top">
    <span class="win-fun">
      <svg class="win-ticon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use></svg
      ><svg class="win-ticon" aria-hidden="true">
        <use xlink:href="#icon-BAI-fangdajing"></use></svg
    ></span>
    <span class="win-mes" v-if="user && user.profile">
      <span class="win-nname">{{ user.profile.nickname }}</span>
      <span class="win-det"
        >{{ user.profile.follows }}关注 | {{ user.profile.followeds }}粉丝 | Lv.{{
          user.level
        }}</span
      ><span class="win-tx"><img :src="user.profile.avatarUrl" alt="" /></span>
    </span>
  </div>
</template>

<style scoped>
.win-fun {
  display: flex;
  justify-content: space-between;
}
.win-ticon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
}
.win-top {
  background-color: #f5f5f5;
}
.win-mes {
  width: 90%;
  height: 6rem;
  margin: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 5px #dcdcdc;
}
.win-nname {
  display: block;
  text-align: center;
  margin-top: 2.3rem;
}
.win-det {
  display: block;
  text-align: center;
  font-size: 17px;
  color: #a9a7a7;
  margin-top: 1rem;
}
.win-tx {
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: 2.5rem;
  left: 7.5rem;
  border-radius: 50%;
  overflow: hidden;
}
.win-tx img {
  width: 3.5rem;
  height: 3.5rem;
}
</style>
