<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";
import {reactive, ref} from "vue";

import img1 from "@/assets/专辑/p1.png";
import img2 from "@/assets/专辑/p2.png";
import img3 from "@/assets/专辑/p3.png";
import img12 from "@/assets/专辑/p12.jpg";

let recommendSongListTitle = ref("推荐摇滚歌单");

let recentSongLists = reactive([
    {
        title: "最近播放的dnb歌单",
        description: "描述信息",
        img: img12,
    },
    {
        title: "最近播放的电子歌单",
        description: "描述信息",
        img: img1,
    },
    {
        title: "最近播放的流行歌单",
        description: "描述信息",
        img: img2,
    },
    {
        title: "最近播放的民谣歌单",
        description: "描述信息",
        img: img3,
    }
]);

let recommendSongLists = reactive([
    {
        title: "推荐dnb歌单",
        description: "描述信息",
        img: img3,
    },
    {
        title: "推荐电子歌单",
        description: "描述信息",
        img: img2,
    },
    {
        title: "推荐流行歌单",
        description: "描述信息",
        img: img1,
    },
    {
        title: "推荐民谣歌单",
        description: "描述信息",
        img: img12,
    }
]);

</script>

<template>

  <MainPageTemplate>
    <!-- 最近播放的歌单和推荐歌单 -->
    <div class="song-list-root">
      <!-- 最近播放的歌单 -->
      <div class="recent-song-list">
        <h1>最近播放的歌单</h1>
        <div class="song-list-container">
          <div class="recent-song-list-item" v-for="(item, index) in recentSongLists" :key="index">
            <img :src="item.img" alt="Song List Image" class="song-list-image"/>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
      <!-- 推荐歌单 -->
      <div class="recommend-song-list">
        <h1>{{recommendSongListTitle}}</h1>
        <div class="song-list-container">
          <div class="recommend-song-list-item" v-for="(item, index) in recommendSongLists" :key="index">
            <img :src="item.img" alt="Song List Image" class="song-list-image"/>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </MainPageTemplate>

</template>

<style scoped>

.song-list-root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recent-song-list, .recommend-song-list {
  display: flex;
  flex-direction: column;
  margin: 0 2% 0 2%;
  width: calc(100% - 4%);
}

.recent-song-list, .recommend-song-list h1 {
  margin: 0;
  padding: 10px 0;
}

.song-list-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}

.recent-song-list-item, .recommend-song-list-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.song-list-image {
  width: 90%;
  object-fit: cover;
  border-radius: 6%;
}

</style>
