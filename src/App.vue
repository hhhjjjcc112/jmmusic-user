<script setup>

import MainPage from "@/pages/MainPage.vue";
import SongLists from "@/pages/SongLists.vue";
import SingerInfo from "@/pages/SingerInfo.vue";
import SongListInfo from "@/pages/SongListInfo.vue";
import Singer from "@/pages/Singer.vue";
import SearchResult from "@/pages/SearchResult.vue";
import Collections from "@/pages/Collections.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Profile from "@/pages/Profile.vue";
import Settings from "@/pages/Settings.vue";

</script>

<template>
  <div id="app1">
<!--    <MainPage />-->
<!--    <SongLists />-->
<!--    <SingerInfo />-->
<!--    <SongListInfo />-->
<!--    <Singer />-->
<!--    <SearchResult />-->
<!--    <Collections />-->
<!--    <login />-->
<!--    <register />-->
<!--    <Profile />-->
<!--    <Settings />-->
    <router-view />
  </div>
</template>

<style scoped>
 #app1 {
   margin: 0;
   height: 100%;
    width: 100%;
 }
</style>
