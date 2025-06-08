<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";

import img7 from "@/assets/专辑/p7.png";
import {reactive, ref} from "vue";
import {MdPlayArrow, MdOutlinePlaylistAdd} from "vue-icons-plus/md";
import {colorStyle} from "@/style/index.js";
import {AiFillHeart} from "vue-icons-plus/ai";
import SongListTable from "@/components/SongListTable.vue";

let displayType = ref("song"); // 默认显示类型为 "歌曲"

let buttonColor = colorStyle.value.dark1;
let descBackgroundColor = colorStyle.value.light1;

let songs = ref(
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

</script>

<template>
  <MainPageTemplate>
    <!-- 歌单信息展示 -->
    <div class="song-list-info-root">
      <!-- 歌单信息头部 -->
      <div class="song-list-info-header">
        <!-- 歌单封面图片 -->
        <img :src="img7" alt="Song List Cover" class="song-list-cover">
        <!-- 歌单标题和描述 -->
        <div class="song-list-info-desc">
          <h1>歌单标题</h1>
          <p>歌单描述信息，介绍歌单的风格、内容等。</p>
          <div class="song-list-info-header-controls">
            <el-button :color="buttonColor" plain>播放全部</el-button>
            <el-button :color="buttonColor" plain>收藏</el-button>
          </div>
        </div>
      </div>
      <!-- 歌单信息选择 -->
      <div class="song-list-info-controls">
        <el-radio-group v-model="displayType" :fill="buttonColor">
          <el-radio-button value="song" >歌曲</el-radio-button>
          <el-radio-button value="intro">详情</el-radio-button>
        </el-radio-group>
      </div>
      <div class="song-list-info-content">
        <!-- 歌单歌曲列表 -->
        <div class="song-list-info-songs" v-if="displayType === 'song'">
          <song-list-table :songs="songs"></song-list-table>
        </div>

        <!-- 歌单详情 -->
        <div class="song-list-info-intro" v-else>
          <h2>歌单详情</h2>
          <p>这里是歌单的详细介绍内容，可能包括制作人、发行时间等信息。</p>
        </div>
      </div>
    </div>
  </MainPageTemplate>
</template>

<style scoped>

.song-list-info-root {
  margin: 4% 5% 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4vh;
}

.song-list-info-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 2vw;
}

.song-list-cover {
  width: 20%;
}

.song-list-info-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.song-list-info-header-controls {
  display: flex;
  flex-direction: row;
}

.song-list-info-controls {
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.song-list-info-content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.song-list-info-songs {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.song-list-info-intro {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2%;
  border-radius: 2vh;
  background-color: v-bind(descBackgroundColor);
}

</style>
