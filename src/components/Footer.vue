<script setup>

import testImg from "@/assets/专辑/p12.jpg"
import {MdSkipNext, MdSkipPrevious, MdPause, MdPlayArrow, MdRepeatOne, MdVolumeOff, MdVolumeUp, MdOutlineFormatListBulleted} from "vue-icons-plus/md";
import {AiOutlineHeart, AiFillHeart} from "vue-icons-plus/ai";
import {TbArrowsRight, TbArrowsShuffle} from "vue-icons-plus/tb";
import {ref} from "vue";


const songInfo = {
  title: "PRAGMATISM -RESURRECTION-",
  artist: "Laur",
  cover: testImg,
};

const currentTimeSecs = 70;
const fullTimeSecs = 300;

let progress = (currentTimeSecs / fullTimeSecs) * 100;
console.log(progress);

const display_function = (_percentage) => {
  const currentTime = {
    minutes: Math.floor(currentTimeSecs / 60),
    seconds: currentTimeSecs % 60,
  }
  const fullTime = {

    minutes: Math.floor(fullTimeSecs / 60),
    seconds: fullTimeSecs % 60,
  }
  if (currentTime.seconds < 10) {
    currentTime.seconds = "0" + currentTime.seconds;
  }
  if (fullTime.seconds < 10) {
    fullTime.seconds = "0" + fullTime.seconds;
  }
  return `${currentTime.minutes}:${currentTime.seconds} / ${fullTime.minutes}:${fullTime.seconds}`;
};

let volume = ref(50);

const backgroundColor = ref("rgba(211, 211, 211, 1)");

</script>

<template>
  <div class="footer">
    <div class="song-info">
      <img :src=songInfo.cover alt="Song Cover" />
      <div class="song-details">
        <h4>{{songInfo.title}}</h4>
        <h4>{{songInfo.artist}}</h4>
      </div>
    </div>
    <div class="play-controls">
      <el-button circle><MdSkipPrevious /></el-button>
      <el-button circle><MdPlayArrow/></el-button>
      <el-button circle><MdSkipNext /></el-button>
      <AiFillHeart color="red"></AiFillHeart>
      <div class="div-progress">
        <el-progress :percentage=progress :format=display_function type="line" color="red"/>
      </div>
      <p></p>
      <el-button circle><TbArrowsRight /></el-button>
      <el-button circle><TbArrowsShuffle /></el-button>
      <el-button circle><MdRepeatOne /></el-button>

      <MdVolumeUp/>
      <div class="div-volume">
        <el-slider v-model="volume" :show-tooltip="false" :step=1 :min=0 :max=100 />
      </div>
      <el-button circle>
        <MdOutlineFormatListBulleted />
      </el-button>



    </div>
  </div>
</template>

<style scoped>
  .footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;

    background-color: v-bind(backgroundColor);

  }

  .song-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    flex: 0.2;
  }

  .song-info img {
    height: 100%;
  }

  .song-details {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .play-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin-right: 3%;
  }

  .div-progress {
    flex: 0.6;
    height: 100%;
  }

  .div-volume {
    flex: 0.2;
    height: 100%;
  }

  .el-button+.el-button {
    margin: 0;
  }
</style>
