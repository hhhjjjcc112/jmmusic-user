<script setup>

import {MdOutlinePlaylistAdd, MdPlayArrow} from "vue-icons-plus/md";
import {AiFillHeart} from "vue-icons-plus/ai";
import {colorStyle} from "@/style/index.js";
import {computed, toRefs} from "vue";

let props = defineProps({
  songs: {
    type: Array,
    required: true,
  },
});

let { songs } = toRefs(props);

const cellStyle = computed(() => {
  return {
    backgroundColor: colorStyle.value.light1,
    color: colorStyle.value.dark3,
    border: "1px solid " + colorStyle.value.light2,
  }
});

const buttonColor = colorStyle.value.light1;


</script>

<template>
  <el-table :data="songs" table-layout="auto" :cell-style="cellStyle" :header-cell-style="cellStyle">
    <el-table-column label="序号" prop="index"></el-table-column>
    <el-table-column label="歌名" prop="name"></el-table-column>
    <el-table-column label="歌手" prop="artist"></el-table-column>
    <el-table-column label="专辑" prop="album"></el-table-column>
    <el-table-column label="发布时间" prop="releaseDate"></el-table-column>
    <el-table-column label="播放次数" prop="playCount"></el-table-column>
    <el-table-column label="时长" prop="duration"></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <div style="display: flex; flex-direction: row; flex-wrap: nowrap">
          <el-button circle size="small" :color="buttonColor" plain><MdPlayArrow /></el-button>
          <el-button circle size="small" :color="buttonColor" plain><AiFillHeart /></el-button>
          <el-button circle size="small" :color="buttonColor" plain><MdOutlinePlaylistAdd /></el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>
