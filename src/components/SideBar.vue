<script setup>

import {ElementPlus, House, List, Setting, Star, Mic} from "@element-plus/icons-vue";

import cover1 from "@/assets/专辑/p1.png";
import cover2 from "@/assets/专辑/p2.png";
import cover3 from "@/assets/专辑/p3.png";
import cover4 from "@/assets/专辑/p4.png";
import cover5 from "@/assets/专辑/p5.png";
import cover6 from "@/assets/专辑/p6.png";
import cover7 from "@/assets/专辑/p7.png";
import cover8 from "@/assets/专辑/p8.png";
import cover9 from "@/assets/专辑/p9.png";
import cover10 from "@/assets/专辑/p10.png";
import {colorStyle} from "@/style/index.js";

const songLists = [
  {img: cover1, title: '我的歌单1', description: '描述信息1'},
  {img: cover2, title: '我的歌单2', description: '描述信息2'},
  {img: cover3, title: '我的歌单3', description: '描述信息3'},
  {img: cover4, title: '我的歌单4', description: '描述信息4'},
  {img: cover5, title: '我的歌单5', description: '描述信息5'},
  {img: cover6, title: '我的歌单6', description: '描述信息6'},
  {img: cover7, title: '我的歌单7', description: '描述信息7'},
  {img: cover8, title: '我的歌单8', description: '描述信息8'},
  {img: cover9, title: '我的歌单9', description: '描述信息9'},
  {img: cover10, title: '我的歌单10', description: '描述信息10'},
];


const backgroundColor = colorStyle.value.light1;

</script>

<template>
  <!-- 左侧导航栏 -->
  <div class="left-nav">
    <!-- 首页类型 -->
    <div class="nav-type-home nav-type">
      <!-- 首页 -->
      <router-link class="nav-home nav-item" to="/">
        <el-icon><House/></el-icon>
        <h4>首页</h4>
        <router-link to="/home" class="nav-link"></router-link>
      </router-link>
    </div>
    <!-- 发现类型 -->
    <div class="nav-type-find nav-type">
      <p>发现</p>
      <!-- 搜索、歌单、歌手、收藏 -->
      <router-link class="nav-search nav-item" to="/search">
        <el-icon><Search/></el-icon>
        <h4>搜索</h4>

      </router-link>
      <!-- 歌单 -->
      <router-link to="/songlists" class="nav-songlist nav-item">
        <el-icon><List/></el-icon>
        <h4>歌单</h4>
      </router-link>
      <!-- 歌手 -->
      <router-link class="nav-singer nav-item" to="/singers">
        <el-icon><Mic/></el-icon>
        <h4>歌手</h4>
      </router-link>
      <!-- 收藏 -->
      <router-link class="nav-favorite nav-item" to="/collections">
        <el-icon><Star/></el-icon>
        <h4>收藏</h4>
      </router-link>
    </div>
    <!-- 设置类型 -->
    <div class="nav-type-settings nav-type">
      <p>设置</p>
      <!-- 设置 -->
      <router-link class="nav-settings nav-item" to="/settings">
        <el-icon><Setting/></el-icon>
        <h4>设置</h4>
      </router-link>
      <!-- 主题 -->
      <router-link class="nav-theme nav-item" to="/settings">
        <el-icon><ElementPlus/></el-icon>
        <h4>主题</h4>
      </router-link>
    </div>
    <!-- 我的歌单 -->
    <div class="nav-my-song-list">
      <p>我的歌单</p>
      <!-- 歌单列表容器 -->
      <div class="song-list-container">
        <div v-for="(item, index) in songLists" :key="index" class="song-list-div">
          <img :src="item.img" alt="Song List Image" class="song-list-image"/>
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: v-bind(backgroundColor);
}

.nav-type {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  margin: 0;
}

.nav-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5% 0 5% 10%;
  text-decoration: none;
  color: inherit; /* 继承父元素颜色 */
}

.nav-item:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: transform 0.3s ease;
  /*设置背景略微变暗*/
  background-color: rgba(0, 0, 0, 0.1);

}

.nav-item h4 {
  margin: 0;
}

/*我的歌单*/
.nav-my-song-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  overflow: hidden;
  width: 100%;
}

/*滚动容器*/
.song-list-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;

  width: 100%;

  /*不显示滚动条*/
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.song-list-div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 5% 0 5% 10%;

  gap: 5%;

}

.song-list-image {
  width: 20%;
  border-radius: 5%;
}
</style>
