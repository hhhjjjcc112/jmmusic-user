<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";

import p1 from "@/assets/歌手/p1.png";
import p2 from "@/assets/歌手/p2.png";
import p3 from "@/assets/歌手/p3.png";
import p4 from "@/assets/歌手/p4.png";
import p5 from "@/assets/歌手/p5.png";
import p6 from "@/assets/歌手/p6.png";
import p7 from "@/assets/歌手/p7.png";
import p8 from "@/assets/歌手/p8.png";


import {reactive, ref} from "vue";
import { colorStyle } from "@/style/index.js";
import MultiLineList from "@/components/MultiLineList.vue";
let displayType1 = ref("all"); // 默认显示类型为 "全部"
let displayType2 = ref("all"); // 默认显示类型为 "全部"

let radioButtonColor = colorStyle.value.dark1;


let avatars = reactive([
  {
    name: "周杰伦",
    pic: p1
  },
  {
    name: "蔡徐坤",
    pic: p2
  },
  {
    name: "王一博",
    pic: p3
  },
  {
    name: "张艺兴",
    pic: p4
  },
  {
    name: "李宇春",
    pic: p5
  },
  {
    name: "陈奕迅",
    pic: p6
  },
  {
    name: "林俊杰",
    pic: p7
  },
  {
    name: "毛阿敏",
    pic: p8
  },
])

</script>

<template>
  <MainPageTemplate>
    <div class="singer-root">
      <div class="singer-header">
        <h1>歌手</h1>
      </div>
      <div class="singer-display-option">
        <el-radio-group v-model="displayType1" :fill="radioButtonColor">
          <el-radio-button value="all">全部</el-radio-button>
          <el-radio-button value="male">男</el-radio-button>
          <el-radio-button value="female">女</el-radio-button>
          <el-radio-button value="group">组合</el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="displayType2" :fill="radioButtonColor">
          <el-radio-button value="all">全部</el-radio-button>
          <el-radio-button value="china1">内地</el-radio-button>
          <el-radio-button value="china2">港台</el-radio-button>
          <el-radio-button value="western">欧美</el-radio-button>
          <el-radio-button value="korea">韩国</el-radio-button>
          <el-radio-button value="japan">日本</el-radio-button>
        </el-radio-group>
      </div>
      <multi-line-list class="singer-avatar-content" :items="avatars">
        <!-- 歌手头像列表 -->
        <template #item="{ item }">
          <div class="singer-avatar-item">
            <img :src=item.pic alt="歌手头像" class="singer-avatar">
            <h3 class="singer-name">{{ item.name }}</h3>
          </div>
        </template>
      </multi-line-list>
    </div>
  </MainPageTemplate>
</template>

<style scoped>

.singer-root {
  display: flex;
  margin: 4% 5% 3% 5%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4vh;
}

.singer-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.singer-display-option {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2vh;
}

.singer-avatar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh 2vh 1vh 2vh;
  gap: 0.5vh;
}

.singer-avatar {
  width: 90%;
  border-radius: 50%;
}

</style>
