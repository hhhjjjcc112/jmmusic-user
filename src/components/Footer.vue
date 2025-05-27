<script setup>

import testImg from "@/assets/专辑/p12.jpg"
import {
  MdSkipNext,
  MdSkipPrevious,
  MdPause,
  MdPlayArrow,
  MdRepeatOne,
  MdVolumeOff,
  MdVolumeUp,
  MdOutlineFormatListBulleted
} from "vue-icons-plus/md";
import {AiOutlineHeart, AiFillHeart} from "vue-icons-plus/ai";
import {TbArrowsRight, TbArrowsShuffle} from "vue-icons-plus/tb";
import {ref} from "vue";
import {colorStyle} from "@/style/index.js";


const songInfo = {
  title: "PRAGMATISM -RESURRECTION-",
  artist: "Laur",
  cover: testImg,
};

const currentTimeSecs = 70;
const fullTimeSecs = 300;

let progress = ref((currentTimeSecs / fullTimeSecs) * 100);
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

const backgroundColor = colorStyle.value.light1;
const buttonColor = colorStyle.value.dark1;

setInterval(() => {
  if (progress < 100) {
    progress += 0.1; // 模拟进度条增长
  }
}, 1000); // 每秒增加0.1%

</script>

<template>
  <!-- 底部 -->
  <div class="footer">
    <!-- 歌曲信息 -->
    <div class="song-info">
      <!--   歌曲封面   -->
      <img :src=songInfo.cover alt="Song Cover"/>
      <!--   歌曲标题和艺术家   -->
      <div class="song-details">
        <h4>{{ songInfo.title }}</h4>
        <h4>{{ songInfo.artist }}</h4>
      </div>
    </div>
    <!-- 播放控制 -->
    <div class="play-controls">
      <!-- 上一首 -->
      <el-button circle plain :color=buttonColor><MdSkipPrevious/></el-button>
      <!--   播放/暂停   -->
      <el-button circle plain :color=buttonColor><MdPlayArrow/></el-button>
      <!--  下一首    -->
      <el-button circle plain :color=buttonColor><MdSkipNext/></el-button>
      <!--   添加/删除喜爱   -->
      <AiFillHeart plain color="red"></AiFillHeart>
      <!--  进度条 -->
      <div class="div-progress">
        <el-progress :percentage=progress :format=display_function type="line" plain :color=buttonColor />
      </div>
      <el-button circle plain :color=buttonColor><TbArrowsRight/></el-button>
      <el-button circle plain :color=buttonColor><TbArrowsShuffle/></el-button>
      <el-button circle plain :color=buttonColor><MdRepeatOne/></el-button>

      <MdVolumeUp :color=buttonColor />
      <div class="div-volume">
        <el-slider v-model=volume :step=1 :min=0 :max=100 class="volume-slider" />
      </div>
      <el-button circle plain :color=buttonColor><MdOutlineFormatListBulleted/></el-button>


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

/* 取消连续2个按钮的间隔 */
.el-button + .el-button {
  margin: 0;
}

.volume-slider {
  --el-slider-main-bg-color: v-bind(buttonColor);
}

</style>
