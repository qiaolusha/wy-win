<script setup></script>

<template>
  <div class="win-top1">
    <svg class="win-hbicon" aria-hidden="true">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="win-gc">广场</span><span class="win-gc">歌房</span>
    <svg class="win-jicon" aria-hidden="true">
      <use xlink:href="#icon-jiahao"></use>
    </svg>
    <svg class="win-hicon" aria-hidden="true">
      <use xlink:href="#icon-hengxian"></use>
    </svg>
  </div>
  <div class="win-top2"><span class="win-tj">推荐</span><span class="win-mv">MV</span></div>
</template>

<style scoped>
.win-top1 {
  display: flex;
  position: relative;
  background-color: #f5f5f5;
}
.win-hbicon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
  padding-right: 2.2rem;
}
.win-jicon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem;
  padding-left: 2.2rem;
}
.win-gc {
  width: 3.5rem;
  padding: 1.2rem 0;
  text-align: center;
}
.win-hicon {
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  left: 6.6rem;
  top: 1.8rem;
}
.win-tj {
  font-size: 18px;
  width: 3rem;
  text-align: center;
  padding: 0.3rem;
  background-color: rgb(241, 103, 103);
  color: white;
  border-radius: 1rem;
}
.win-mv {
  font-size: 18px;
  width: 3rem;
  text-align: center;
}
.win-top2 {
  background-color: #f5f5f5;
  padding: 1rem;
}
</style>
