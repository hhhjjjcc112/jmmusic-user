<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";

import singerPic from "@/assets/歌手/p3.png"
import {ref, watch} from "vue";
import {colorStyle} from "@/style/index.js";

let displayType = ref("song"); // 默认显示类型为 "歌曲"

watch(displayType, (newValue) => {
  console.log("Display type changed to:", newValue);
  // 根据 displayType 的值更新显示内容
  // 这里可以添加逻辑来切换显示的内容
});

let radioButtonColor = colorStyle.value.light1;
let displayContentBG = colorStyle.value.light1;

</script>

<template>

  <MainPageTemplate>
    <div class="singer-info-root">
      <div class="singer-info-header">
        <img :src="singerPic" alt="歌手图片" class="singer-pic">
        <div class="singer-info-text">
          <h1>歌手名字</h1>
          <p>歌手简介信息，描述歌手的风格、成就等。</p>
        </div>
      </div>
      <div class="singer-controls">
        <el-radio-group v-model="displayType" :fill="radioButtonColor">
          <el-radio-button value="song">歌曲</el-radio-button>
          <el-radio-button value="album">专辑</el-radio-button>
          <el-radio-button value="intro">详情</el-radio-button>
        </el-radio-group>
      </div>
      <!-- 歌手展示内容 -->
      <div class="singer-display-content">
        <div v-if="displayType === 'song'">
          <h2>歌曲列表</h2>
          <!-- 歌曲列表内容 -->
          <p>这里是歌手的歌曲列表...</p>
        </div>
        <div v-else-if="displayType === 'album'">
          <h2>专辑列表</h2>
          <!-- 专辑列表内容 -->
          <p>这里是歌手的专辑列表...</p>
        </div>
        <div v-else-if="displayType === 'intro'">
          <h2>歌手详情</h2>
          <!-- 歌手详情内容 -->
          <p>这里是歌手的详细介绍...</p>
        </div>

      </div>
    </div>
  </MainPageTemplate>

</template>

<style scoped>
.singer-info-root {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  width: calc(100% - 5% - 5%);
}

.singer-info-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10%;
  margin: 2% 0 2% 0;
  width: 100%;
}

.singer-pic {
  width: 15%;
  border-radius: 50%;
}

.singer-info-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.singer-controls {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2%;
}

.singer-display-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: v-bind(displayContentBG);
  padding: 2%;
  border-radius: 1.8vh;
}
</style>
