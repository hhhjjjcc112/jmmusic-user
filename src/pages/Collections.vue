<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";
import {ref} from "vue";
import SongListTable from "@/components/SongListTable.vue";
import {colorStyle} from "@/style/index.js";

let collectionSongs = ref(
    [
      {index: 1, name: "歌曲1", artist: "歌手1", album: "专辑1", releaseDate: "2023-01-01", playCount: 1000, duration: "3:30"},
      {index: 2, name: "歌曲2", artist: "歌手2", album: "专辑2", releaseDate: "2023-02-01", playCount: 2000, duration: "4:00"},
      {index: 3, name: "歌曲3", artist: "歌手3", album: "专辑3", releaseDate: "2023-03-01", playCount: 3000, duration: "2:45"},
      {index: 4, name: "歌曲4", artist: "歌手4", album: "专辑4", releaseDate: "2023-04-01", playCount: 4000, duration: "3:15"},
      {index: 5, name: "歌曲5", artist: "歌手5", album: "专辑5", releaseDate: "2023-05-01", playCount: 5000, duration: "3:50"},
      {index: 6, name: "歌曲6", artist: "歌手6", album: "专辑6", releaseDate: "2023-06-01", playCount: 6000, duration: "4:20"},
      {index: 7, name: "歌曲7", artist: "歌手7", album: "专辑7", releaseDate: "2023-07-01", playCount: 7000, duration: "3:10"},
      {index: 8, name: "歌曲8", artist: "歌手8", album: "专辑8", releaseDate: "2023-08-01", playCount: 8000, duration: "4:05"},
      {index: 9, name: "歌曲9", artist: "歌手9", album: "专辑9", releaseDate: "2023-09-01", playCount: 9000, duration: "3:25"},
      {index: 10, name: "歌曲10", artist: "歌手10", album: "专辑10", releaseDate: "2023-10-01", playCount: 10000, duration: "4:15"},
    ]
)

let buttonColor = colorStyle.value.dark1;

let backgroundColor = colorStyle.value.light2;

</script>

<template>
  <main-page-template>
    <div class="collections-root">
      <h1>我的收藏</h1>
      <div class="collections-statistics">

        <div class="collections-songs-count">
          <p>歌曲 {{ collectionSongs.length }}</p>
        </div>
        <div class="collections-search">
          <el-input placeholder="搜索收藏" size="small" clearable>
            <template #prepend>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
        </div>

      </div>
      <div class="collections-controls">
        <el-button plain :color="buttonColor" >播放全部</el-button>
        <el-button plain :color="buttonColor" >批量操作</el-button>
      </div>
      <div>
        <song-list-table :songs="collectionSongs" />
      </div>

    </div>
  </main-page-template>

</template>

<style scoped>

.collections-root {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4% 5% 3% 5%;
  row-gap: 4vh;
}

.collections-statistics {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

.collections-songs-count {
  background-color: v-bind(backgroundColor);
  padding: 0.2vw 2vh;
}

</style>
