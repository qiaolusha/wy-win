<script setup></script>

<template>
  <div class="win-header1">
    <span>
      <a href="#win"
        ><svg class="win-hbicon" aria-hidden="true">
          <use xlink:href="#icon-menu"></use></svg
      ></a>
    </span>
    <svg class="win-scicon" aria-hidden="true">
      <use xlink:href="#icon-BAI-fangdajing"></use>
    </svg>
    <input
      type="text"
      placeholder="       群青"
      class="win-search"
      @click="$router.push('/searchPage')"
    />
    <svg class="win-smicon" aria-hidden="true">
      <use xlink:href="#icon-iconfontscan"></use>
    </svg>
    <span>
      <svg class="win-micon" aria-hidden="true">
        <use xlink:href="#icon-mian"></use>
      </svg>
    </span>
    <span>
      <svg class="win-micon" aria-hidden="true">
        <use xlink:href="#icon-huatong"></use>
      </svg>
    </span>
  </div>
  <!-- 弹窗 -->
  <div id="win" class="win-tc">
    <div class="win-content">
      <div class="win-button">
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-xinfeng"></use></svg
          ></span>
          <span class="win-ts">我的消息</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-diandeng-dengpao-zhaoming"></use></svg
          ></span>
          <span class="win-ts">创作者中心</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-mian"></use></svg
          ></span>
          <span class="win-ts">免费听歌</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
      </div>
      <div class="win-button">
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-gouwudai"></use></svg
          ></span>
          <span class="win-ts">商城</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-huomiao"></use></svg
          ></span>
          <span class="win-ts">云推歌</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-xinhaoyuan"></use></svg
          ></span>
          <span class="win-ts">免流量听歌</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-shezhi"></use></svg
          ></span>
          <span class="win-ts">设置</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-dingshiguanbi"></use></svg
          ></span>
          <span class="win-ts">定时关闭</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-yueliang"></use></svg
          ></span>
          <span class="win-ts">深色模式</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-a-068_yifu"></use></svg
          ></span>
          <span class="win-ts">个性装扮</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-shouwei"></use></svg
          ></span>
          <span class="win-ts">青少年模式</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
        <div class="win-box">
          <span
            ><svg class="win-zicon" aria-hidden="true">
              <use xlink:href="#icon-naozhong"></use></svg
          ></span>
          <span class="win-ts">音乐闹钟</span>
          <span
            ><svg class="win-yicon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use></svg
          ></span>
        </div>
      </div>
    </div>
    <a href="#" class="win-close"></a>
  </div>
</template>

<style scoped>
.win-header1 {
  height: 3rem;
  display: flex;
  position: relative;
  align-items: center;
}
.win-hbicon {
  margin-left: 0.8rem;
  margin-top: 0.2rem;
  height: 1rem;
  width: 1rem;
}
.win-scicon {
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: 3rem;
}
.win-smicon {
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: 12rem;
}
.win-micon {
  width: 2rem;
  height: 1.2rem;
  margin-top: 0.2rem;
}
.win-search {
  height: 1.5rem;
  border-radius: 6rem;
  border: 1px solid #ccd7e2;
  margin-left: 0.5rem;
}
.win-tc {
  position: absolute;
  top: 0;
  display: none; /*这里*/
  width: 100%;
  height: 100%;
  z-index: 20;
  text-align: center;
  animation: fadein 0.5s;
}
.win-tc:target {
  display: block;
}
.win-content {
  position: absolute;
  width: 15rem;
  height: 100%;
  z-index: 30;
  background-color: #f5f5f5;
}
.win-close {
  position: absolute;
  right: 0;
  display: inline-block;
  width: 3.5rem;
  height: 100%;
}
.win-box {
  display: flex;
  border-bottom: 1px solid #0000000f;
}
.win-zicon {
  width: 1.3rem;
  height: 1.5rem;
  padding: 0.8rem 0.8rem 0 1rem;
}
.win-yicon {
  width: 1.3rem;
  height: 1.5rem;
  padding: 0.75rem 0.5rem 0 1rem;
}
.win-ts {
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: left;
}
.win-button {
  margin: 2rem auto 0;
  background-color: #fff;
  width: 90%;
  border-radius: 1rem;
}
@keyframes fadein {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: none;
  }
}
</style>
