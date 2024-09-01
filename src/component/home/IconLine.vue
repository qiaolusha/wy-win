<script setup></script>

<template>
  <div>
    <span
      ><svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-richeng"></use></svg></span
    ><span
      ><svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-shouyinji1"></use></svg></span
    ><span
      ><svg class="win-icon" aria-hidden="true" style="width: 1.8em">
        <use
          xlink:href="#icon-xianxingjuxingyinlefuhaotubiao"
        ></use></svg></span
    ><span
      ><svg class="win-icon" aria-hidden="true">
        <use xlink:href="#icon-zhuzhuangtu"></use></svg></span
    ><span
      ><svg class="win-icon" aria-hidden="true" style="width: 1.6rem">
        <use xlink:href="#icon-youshengshu"></use>
      </svg>
    </span>
  </div>
  <div class="win-words">
    <span class="win-word">每日推荐</span>
    <span class="win-word">私人FM</span><span class="win-word">歌单</span
    ><span class="win-word">排行榜</span><span class="win-word">有声书</span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  height: 2rem;
  width: 17rem;
  justify-content: center;
  margin: 0.5rem auto;
}
.win-icon {
  margin: 0 0.7rem;
  width: 2rem;
  height: 2rem;
}
div .win-words {
  display: flex;
  height: 1rem;
  width: 17rem;
  justify-content: center;
  margin: 0 auto;
  font-size: 0.5rem;
}
.win-word {
  margin: auto 0.9rem;
}
</style>
