<script setup>

import backGround from '@/assets/mainpage-bg.png';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/SideBar.vue";
import {colorStyle} from "@/style/index.js";

let backgroundColor = colorStyle.value.main_color;

let backgroundImage = `url(${backGround})`;

</script>

<template>
  <div class="page-root">
    <!--  圆角  -->
    <div class="inner_border">
      <!-- 头部  -->
      <div class="div-header"><Header/></div>
      <!--  中间内容  -->
      <div class="page-center">
        <!-- 左侧导航栏  -->
        <div class="div-left-nav"><side-bar/></div>
        <div class="content">

          <!-- 中间内容区域  -->
          <slot></slot>

        </div>
      </div>
      <!-- 底部  -->
      <div class="div-footer"><Footer/></div>
    </div>
  </div>
</template>

<style scoped>
.page-root {
  background: v-bind(backgroundImage) no-repeat center center fixed;
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
  height: calc(100% - 10% - 10%); /* 减去头部和底部的高度 */
  overflow: hidden;
}

.content {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  background-color: v-bind(backgroundColor);

  /*不显示滚动条*/
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.div-header {
  width: 100%;
  height: 10%;
}

.div-footer {
  width: 100%;
  height: 10%;
}

.div-left-nav {
  width: 15%;
  height: 100%;
}
</style>
