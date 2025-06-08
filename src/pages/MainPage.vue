<script setup>

import PicMarquee from "@/components/PicMarquee.vue";
import Recommend from "@/components/Recommend.vue";
import MainPageTemplate from "@/components/MainPageTemplate.vue";

</script>

<template>
  <main-page-template>
    <!-- 轮播图  -->
    <div><pic-marquee/></div>


    <!-- 推荐  -->
    <div class="main-page-bottom"><recommend/></div>

  </main-page-template>

</template>

<style scoped>
.main-page-bottom {
  margin-bottom: 3%;
}
</style>

