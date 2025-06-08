<script setup>

import {reactive} from "vue";

const carouselItems = reactive([]);

moun

</script>

<template>

  <!-- 顶层容器 -->
  <div class="carousel-container">
    <!-- 走马灯组件 -->
    <el-carousel :interval=5000 autoplay arrow="always" direction="horizontal" type="card">
      <!-- 走马灯项 -->
      <el-carousel-item v-for="item in carouselItems" :key="item">
        <!-- 图片展示 -->
        <el-image :src="item.img" alt="Image" fit="cover" :min-scale=0.1 />
      </el-carousel-item>
    </el-carousel>
  </div>


</template>

<style scoped>
.carousel-container {
  width: 100%;
  height: 100%;
}

.el-carousel {
  width: 100%;
  height: 100%;
}

.el-carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-image {
  height: 80%;
  border-radius: 6%;
}
</style>
