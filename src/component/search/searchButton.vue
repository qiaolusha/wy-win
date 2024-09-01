<script setup>
import { getHot } from '@/api/request/search.js'
import { onMounted, ref } from 'vue'
let hot = ref([])

onMounted(async () => {
  let res = await getHot()
  // console.log(res)
  hot.value = res.data.data
})
</script>

<template>
  <div class="win-box">
    <div class="win-hot">
      <span class="win-rs">热搜榜</span>
      <hr />
      <ul v-for="(word, index) in hot" :key="index">
        <li>
          <span class="win-count">{{ index + 1 }}</span
          ><span>{{ word.searchWord }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.win-box {
  width: 100%;
  background-color: #f6f6f6;
}
.win-hot {
  width: 80%;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 10px;
}
.win-rs {
  margin: 1rem 0 0.5rem 1rem;
}
hr {
  width: 12rem;
  border: none;
  border-top: 1px solid #dfdfdf;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
.win-count {
  width: 2rem;
  padding-left: 1rem;
  color: #7f7f7f;
}
</style>
