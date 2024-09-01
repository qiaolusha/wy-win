<script setup>
import { ref, onMounted } from 'vue'
import { getLogKey, getLogQrimg, getLogState } from '@/api/request/login.js'

const key = ref(null)
const qrimg = ref(null)
// const interval = ref(null)

const getKey = async () => {
  const res = await getLogKey()
  key.value = res.data.data.unikey
  getImg()
  // startPolling()
}

const getImg = async () => {
  const res = await getLogQrimg(key.value)
  qrimg.value = res.data.data.qrimg
}

// const getState = async () => {
//   const res = await getLogState(key.value)
//   const status = res.data.code
//   // console.log(status)
//   // handleState(status)
// }

// const startPolling = () => {
//   interval.value = setInterval(() => {
// getState()
//   }, 2000) // 每2秒轮询一次
// }

// const stopPolling = () => {
//   if (interval.value) {
//     clearInterval(interval.value)
//     interval.value = null
//   }
// }

// const handleState = (status) => {
//   switch (status) {
//     case 800:
//       getImg()
//       break
//   }
// }

onMounted(() => {
  getKey()
})

// onUnmounted(() => {
//   stopPolling()
// })
</script>

<template>
  <div class="win-box">
    <svg class="win-icon" aria-hidden="true">
      <use xlink:href="#icon-wangyiyunyinle"></use>
    </svg>
    <span class="win-qr"><img v-if="qrimg" :src="qrimg" alt="" /></span>
    <span @click="$router.push('/HomeMine')" class="win-suc">扫码成功</span>
    <span @click="$router.push('/')" class="win-yk">游客登录</span>
  </div>
</template>

<style scoped>
.win-box {
  width: 100%;
  height: 40rem;
  background-image: linear-gradient(white, rgba(251, 140, 140, 0.5));
}
.win-icon {
  margin: 3rem auto;
  width: 100%;
  height: 5rem;
}
.win-qr {
  margin: 1rem 0 0 4.9rem;
}
.win-suc {
  display: block;
  text-align: center;
  color: #5498fd;
}
.win-yk {
  width: 10rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 28px;
  text-align: center;
  margin: 4.5rem;
  border-radius: 1.5rem;
  background-color: #ff4242;
  color: #ffffff;
}
</style>
