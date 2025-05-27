<script setup>

import img1 from '@/assets/歌手/p1.png';
import {colorStyle} from "@/style/index.js";

let example_avatar = img1;

const backgroundColor = colorStyle.value.light1;

</script>

<template>
  <div class="header">
    <div class="header-deco-traffic-light">
      <div class="header-deco-y"/>
      <div class="header-deco-g"/>
      <div class="header-deco-r"/>
    </div>
    <div class="header-search">
      <el-icon>
        <Search/>
      </el-icon>
      <input type="text" placeholder="搜索歌曲、歌手、专辑..."/>
    </div>
    <div class="header-avatar">
      <el-avatar size="default" alt="User Avatar" shape="circle" :src="example_avatar">
      </el-avatar>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  background-color: v-bind(backgroundColor);
}


.header-deco-traffic-light {
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20%;
  height: 100%;
}

.header-deco-g, .header-deco-r, .header-deco-y {
  height: 30%;
  aspect-ratio: 1; /* 1:1 */
  border-radius: 50%;
}

.header-deco-y {
  background-color: yellow;
}

.header-deco-g {
  background-color: green;
}

.header-deco-r {
  background-color: red;
}

.header-search {
  display: flex;
  width: 30%;
  height: 100%;
  margin-left: 30%;
  align-items: center;
}

.header-search input {
  width: 100%;
  height: 40%;
}

.header-avatar {
  margin-right: 5%;
  height: 80%;
  display: flex;
  align-items: center;
}

</style>
