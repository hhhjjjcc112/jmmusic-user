<script setup>

import {computed, toRefs} from "vue";

let props = defineProps({
  componentNum: {
    type: Number,
    default: 5
  },
  items: {
    type: Array,
    required: true,
  }
});

let { componentNum, items } = toRefs(props);
let componentWidth = computed(() => {
  if (items.value.length === 0) return '100%';
  return `calc(100% / ${componentNum.value})`;
});

</script>

<template>
  <div class="multiline-list">
    <div v-for="(item, index) in items" :key="index" class="multiline-list-component">
      <slot name="item" :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<style scoped>
  .multiline-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    align-items: stretch;
  }

  .multiline-list-component {
    width: v-bind(componentWidth);
  }

</style>
