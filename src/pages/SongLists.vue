<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";
import {reactive, ref} from "vue";

import img1 from "@/assets/专辑/p1.png";
import img2 from "@/assets/专辑/p2.png";
import img3 from "@/assets/专辑/p3.png";
import img12 from "@/assets/专辑/p12.jpg";
import MultiLineList from "@/components/MultiLineList.vue";

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
        <multi-line-list class="song-list-container" :items="recentSongLists" component-num=4>
          <template #item="{ item }">
            <div class="recent-song-list-item">
              <img :src="item.img" alt="Song List Image" class="song-list-image"/>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </template>
        </multi-line-list>
      </div>
      <!-- 推荐歌单 -->
      <div class="recommend-song-list">
        <h1>{{recommendSongListTitle}}</h1>
        <multi-line-list class="song-list-container" :items="recentSongLists" component-num=4>
          <template #item="{ item }">
            <div class="recommend-song-list-item">
              <img :src="item.img" alt="Song List Image" class="song-list-image"/>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </template>
        </multi-line-list>
      </div>
    </div>

  </MainPageTemplate>

</template>

<style scoped>

.song-list-root {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4% 5% 3% 5%;
  gap: 4vh;
  align-items: center;
}

.recent-song-list, .recommend-song-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.recent-song-list h1, .recommend-song-list h1 {
  padding: 10px 0;
}


.recent-song-list-item, .recommend-song-list-item {
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
