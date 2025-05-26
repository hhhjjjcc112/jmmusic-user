<script setup>

import img1 from '@/assets/专辑/p1.png';
import img2 from '@/assets/专辑/p2.png';
import img3 from '@/assets/专辑/p3.png';
import img4 from '@/assets/专辑/p4.png';
import img5 from '@/assets/专辑/p5.png';
import img6 from '@/assets/专辑/p6.png';
import img7 from '@/assets/专辑/p7.png';
import img8 from '@/assets/专辑/p8.png';
import img9 from '@/assets/专辑/p9.png';
import img10 from '@/assets/专辑/p10.png';
import img11 from '@/assets/专辑/p11.png';
import img12 from '@/assets/专辑/p12.jpg';
import img13 from '@/assets/专辑/p13.jpg';

const carouselItems = [
  {img: img1},
  {img: img2},
  {img: img3},
  {img: img4},
  {img: img5},
  {img: img6},
  {img: img7},
  {img: img8},
  {img: img9},
  {img: img10},
  {img: img11},
  {img: img12},
  {img: img13},
];

</script>

<template>

  <div class="carousel-container">
    <el-carousel :interval=5000 autoplay arrow="always" direction="horizontal" type="card">
      <el-carousel-item v-for="item in carouselItems" :key="item">
        <el-image :src="item.img" alt="Image" fit="cover" :min-scale=0.1/>
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
