<script setup>

import MainPageTemplate from "@/components/MainPageTemplate.vue";


</script>

<template>
 <main-page-template>
   <div class="settings-root">
     <div class="settings-common">
      <h1>常规设置</h1>
       <el-form>

       </el-form>
       <div class="settings-language"></div>
     </div>
     <div class="settings-music">
       <h1>音频设置</h1>
       <div>
         <el-form>
            <el-form-item label="音量">
              <el-slider v-model="volume" :min="0" :max="100" />
            </el-form-item>
            <el-form-item label="音质">
              <el-select v-model="audioQuality" placeholder="选择音质">
                <el-option label="低" value="low"></el-option>
                <el-option label="中" value="medium"></el-option>
                <el-option label="高" value="high"></el-option>
              </el-select>
            </el-form-item>
         </el-form>
       </div>

     </div>
     <div class="settings-style">
       <h1>主题设置</h1>

     </div>
   </div>
 </main-page-template>
</template>

<style scoped>

.settings-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 4% 5% 3% 5%;
  row-gap: 4vh;
}

.settings-common, .settings-music, .settings-style {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 2vh;
}

</style>
