<script setup>

import Header from '@/components/Header.vue';
import Footer from "@/components/Footer.vue";
import LeftNav from "@/components/LeftNav.vue";
import PicMarquee from "@/components/PicMarquee.vue";
import Recommend from "@/components/Recommend.vue";

let backgroundColor = "rgba(175, 175, 175, 1)";

</script>

<template>
  <div class="page-root">
    <!--  圆角  -->
    <div class="inner_border">
      <!-- 头部  -->
      <div class="div-header">
        <Header/>
      </div>
      <!--  中间内容  -->
      <div class="page-center">
        <!-- 左侧导航栏  -->
        <div class="div-left-nav">
          <LeftNav/>
        </div>
        <div class="content">
          <!-- 轮播图  -->
          <div><PicMarquee/></div>

          <!-- 推荐  -->
          <div><Recommend/></div>


        </div>
      </div>
      <!-- 底部  -->
      <div class="div-footer">
        <Footer/>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .page-root {
    background: url('../assets/mainpage-bg.png') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }

  .inner_border {
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 95%;
    overflow: hidden;
  }

  .page-center {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: hidden;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;

    background-color: v-bind(backgroundColor);

    /*不显示滚动条*/
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .div-header {
    width: 100%;
    height: 10%;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .div-footer {
    width: 100%;
    height: 10%;
    position: sticky;
    bottom: 0;
    z-index: 100;
  }

  .div-left-nav {
    width: 15%;
    height: 100%;
    position: sticky;
    left: 0;
    z-index: 100;
  }
</style>

