<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";
import {ref} from "vue";
import SongListTable from "@/components/SongListTable.vue";

import avatar1 from "@/assets/歌手/p1.png";

import cover1 from "@/assets/专辑/p1.png";
import {colorStyle} from "@/style/index.js";

let resultSongs = ref(
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

let singer = ref({
  name: "周杰伦",
  pic: avatar1,
  description: "周杰伦，华语流行音乐的代表人物之一，以其独特的音乐风格和才华横溢的创作能力而闻名。",
  songCount: 100,
  albumCount: 20,
})

let songList = ref({
  title: "周杰伦精选集",
  cover: cover1,
  description: "周杰伦的经典歌曲合集，收录了他的代表作和热门单曲。",
  songCount: 50,
  playCount: 1000000,
})

let buttonColor = colorStyle.value.dark1;

</script>

<template>
  <main-page-template>
    <div class="search-result-root">
      <div class="search-result-singer-songlist">
        <div class="search-result-singer">
          <img :src="singer.pic" alt="Singer Avatar" class="singer-avatar">
          <div class="singer-info">
            <h2>{{ singer.name }}</h2>
            <p>{{ singer.description }}</p>
            <p>歌曲数: {{ singer.songCount }} | 专辑数: {{ singer.albumCount }}</p>
          </div>
        </div>
        <div class="search-result-songlist">
          <img :src="songList.cover" alt="Song List Cover" class="song-list-cover">
          <div class="song-list-info">
            <h2>{{ songList.title }}</h2>
            <p>{{ songList.description }}</p>
            <p>歌曲数: {{ songList.songCount }} | 播放量: {{ songList.playCount }}</p>
          </div>
        </div>
      </div>

      <div class="search-result-controls">
        <el-button :color="buttonColor" plain>播放全部</el-button>
        <el-button :color="buttonColor" plain>批量操作</el-button>
      </div>

      <div class="search-result-songs">
        <song-list-table :songs="resultSongs" />
      </div>
    </div>
  </main-page-template>
</template>

<style scoped>

.search-result-root {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4vh;
  margin: 4% 5% 3% 5%;
}

.search-result-singer-songlist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 5vw;
}

.search-result-singer, .search-result-songlist {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
  column-gap: 1vw;
}

.singer-info, .song-list-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.singer-avatar {
  width: 30%;
  border-radius: 50%;
}

.song-list-cover {
  width: 30%;
}


</style>
