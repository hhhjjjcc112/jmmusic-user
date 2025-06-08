<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";
import avatar from "@/assets/歌手/p3.png";
import {ref, toRefs} from "vue";
import {colorStyle} from "@/style/index.js";
import MultiLineList from "@/components/MultiLineList.vue";

let status = ref("online");

let radioButtonColor = colorStyle.value.dark1;

let displaySwitch = ref(true);

let userSongList = ref([
  {img: avatar, title: '我的歌单1', description: '描述信息1'},
  {img: avatar, title: '我的歌单2', description: '描述信息2'},
  {img: avatar, title: '我的歌单3', description: '描述信息3'},
  {img: avatar, title: '我的歌单4', description: '描述信息4'},
  {img: avatar, title: '我的歌单5', description: '描述信息5'},
]);

let { light1, main_color, light2 } = colorStyle.value;

</script>

<template>
  <main-page-template>
    <div class="profile-root">
      <div class="profile-basic">
        <img :src="avatar" alt="用户头像" class="profile-avatar">
        <div class="profile-info">
          <div class="profile-name-id">
            <h1>AAA建材牢阳</h1>
            <p>ID: 123456789</p>
          </div>
        </div>
      </div>
      <div class="profile-status">
        <el-radio-group v-model="status" :fill="radioButtonColor">
          <el-radio-button value="online">在线</el-radio-button>
          <el-radio-button value="offline">离线</el-radio-button>
          <el-radio-button value="invisible">隐身</el-radio-button>
        </el-radio-group>
      </div>
      <div class="profile-songlist">
        <div class="profile-songlist-display-switch">
          <div class="switch-title">
            <h3>我的歌单</h3>
          </div>
          <el-switch v-model="displaySwitch" />
        </div>
        <div v-show="displaySwitch" class="profile-songlist-content">
          <multi-line-list :items="userSongList">
            <template #item="{ item }">
              <div class="song-list-item">
                <img :src="item.img" alt="Song List Image" class="song-list-image"/>
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </template>
          </multi-line-list>
        </div>
      </div>
    </div>
  </main-page-template>
</template>

<style scoped>

.profile-root {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4% 5% 3% 5%;
  row-gap: 3vh;
}

.profile-basic {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2vw;
}

.profile-basic img {
  width: 15%;
  border-radius: 50%;
}

.profile-info {
  display: flex;
  flex-direction: column;

}

.profile-name-id {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1vw;
}

.profile-songlist {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 2vh;
}

.profile-songlist-display-switch {
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  column-gap: 1vw;
  align-items: center;

}

.switch-title {
  background-color: v-bind(light2);
  padding: 0.2vh 0.4vw;
}

.song-list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1vh 0;
}

.song-list-item img {
  width: 90%;
  object-fit: cover;
  border-radius: 6%;
}

</style>
