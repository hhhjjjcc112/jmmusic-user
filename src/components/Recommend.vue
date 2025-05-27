<script setup>

import songListP1 from '@/assets/专辑/p1.png';
import songListP2 from '@/assets/专辑/p2.png';
import songListP3 from '@/assets/专辑/p3.png';
import songListP4 from '@/assets/专辑/p4.png';
import songListP5 from '@/assets/专辑/p5.png';

import singerP1 from '@/assets/歌手/p1.png';
import singerP2 from '@/assets/歌手/p2.png';
import singerP3 from '@/assets/歌手/p3.png';
import singerP4 from '@/assets/歌手/p4.png';
import singerP5 from '@/assets/歌手/p5.png';
import singerP6 from '@/assets/歌手/p6.png';
import singerP7 from '@/assets/歌手/p7.png';
import singerP8 from '@/assets/歌手/p8.png';
import {colorStyle} from "@/style/index.js";


const songLists = [
  {img: songListP1, title: '推荐歌单1', description: '描述信息1'},
  {img: songListP2, title: '推荐歌单2', description: '描述信息2'},
  {img: songListP3, title: '推荐歌单3', description: '描述信息3'},
  {img: songListP4, title: '推荐歌单4', description: '描述信息4'},
  {img: songListP5, title: '推荐歌单5', description: '描述信息5'},

];

const singers = [
  {img: singerP1, title: '热门歌手1', description: '描述信息1'},
  {img: singerP2, title: '热门歌手2', description: '描述信息2'},
  {img: singerP3, title: '热门歌手3', description: '描述信息3'},
  {img: singerP4, title: '热门歌手4', description: '描述信息4'},
  {img: singerP5, title: '热门歌手5', description: '描述信息5'},
  {img: singerP6, title: '热门歌手6', description: '描述信息6'},
  {img: singerP7, title: '热门歌手7', description: '描述信息7'},
  {img: singerP8, title: '热门歌手8', description: '描述信息8'},

];

const hotBoard = [
  {img: songListP1, title: '热门歌曲1', singer: "歌手1", description: '描述信息1'},
  {img: songListP2, title: '热门歌曲2', singer: "歌手2", description: '描述信息2'},
  {img: songListP3, title: '热门歌曲3', singer: "歌手3", description: '描述信息3'},
  {img: songListP4, title: '热门歌曲4', singer: "歌手4", description: '描述信息4'},
  {img: songListP5, title: '热门歌曲5', singer: "歌手5", description: '描述信息5'},

];

const newBoard = [
  {img: songListP1, title: '新歌榜单1', singer: '歌手1', description: '描述信息1'},
  {img: songListP2, title: '新歌榜单2', singer: '歌手2', description: '描述信息2'},
  {img: songListP3, title: '新歌榜单3', singer: '歌手3', description: '描述信息3'},
  {img: songListP4, title: '新歌榜单4', singer: '歌手4', description: '描述信息4'},
  {img: songListP5, title: '新歌榜单5', singer: '歌手5', description: '描述信息5'},

];

const surgeBoard = [
  {img: songListP1, title: '飙升榜单1', singer: '歌手1', description: '描述信息1'},
  {img: songListP2, title: '飙升榜单2', singer: '歌手2', description: '描述信息2'},
  {img: songListP3, title: '飙升榜单3', singer: '歌手3', description: '描述信息3'},
  {img: songListP4, title: '飙升榜单4', singer: '歌手4', description: '描述信息4'},
  {img: songListP5, title: '飙升榜单5', singer: '歌手5', description: '描述信息5'},

];

const backgroundColor = colorStyle.value.light1;

</script>

<template>
  <!-- 推荐部分 -->
  <div class="recommend">
    <!-- 推荐歌单 -->
    <div class="recommend-song-list">
      <!-- 标题 -->
      <div class="recommend-song-list-title"><h1>推荐歌单</h1></div>
      <!-- 歌单内容 -->
      <div class="recommend-song-list-content">
        <!-- 歌单列表 -->
        <div v-for="(item, index) in songLists" :key="index" class="song-list-div">
          <!-- 歌单图片 -->
          <img :src="item.img" alt="Song List Image" class="song-list-image"/>
          <!-- 歌单标题和描述 -->
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <!-- 推荐歌手 -->
    <div class="recommend-singer">
      <!-- 标题 -->
      <div class="recommend-singer-title"><h1>热门歌手</h1></div>
      <!-- 歌手内容 -->
      <div class="recommend-singer-content">
        <!-- 歌手列表 -->
        <div v-for="(item, index) in singers" :key="index" class="singer-div">
          <img :src="item.img" alt="Singer Image" class="singer-image"/>
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <!-- 音乐排行榜 -->
    <div class="recommend-rank">
      <!-- 标题 -->
      <div class="recommend-rank-title">
        <h1>音乐排行榜</h1>
      </div>
      <!-- 排行榜 -->
      <div class="rank-board-div">
        <!-- 热歌榜 -->
        <div class="hot-board">
          <h1>热歌榜</h1>
          <div class="hot-board-content">
            <div v-for="(item, index) in hotBoard" :key="index" class="hot-div">
              <p>{{ index + 1 }}. {{ item.description }} {{ item.singer }}</p>
            </div>
          </div>
        </div>
        <!-- 新歌榜 -->
        <div class="new-board">
          <h1>新歌榜</h1>
          <div class="new-board-content">
            <div v-for="(item, index) in newBoard" :key="index" class="new-div">
              <p>{{ index + 1 }}. {{ item.description }} {{ item.singer }}</p>
            </div>
          </div>
        </div>
        <!-- 飙升榜 -->
        <div class="surge-board">
          <h1>飙升榜</h1>
          <div class="surge-board-content">
            <div v-for="(item, index) in surgeBoard" :key="index" class="surge-div">
              <p>{{ index + 1 }}. {{ item.description }} {{ item.singer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

.recommend {
  display: flex;
  flex-direction: column;
  width: calc(100% - 2% - 2%);
  margin-left: 2%;
  margin-right: 2%;

}

.recommend-song-list, .recommend-singer, .recommend-rank {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.recommend-song-list-content, .recommend-singer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.song-list-div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0 5px 0;

  width: 25%;
}

.song-list-image {
  width: 90%;
  border-radius: 5%;
}

.song-list-div:hover, .singer-div:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: transform 0.3s ease;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6%;
}

.singer-div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0 5px 0;

  width: 20%;
}

.singer-image {
  width: 90%;
  border-radius: 50%;
}

.rank-board-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.hot-board, .new-board, .surge-board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0 5px 0;
  border-radius: 6%;
  background-color: v-bind(backgroundColor);

  width: 30%;
}

.hot-board-content, .new-board-content, .surge-board-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 5px;
}


</style>
