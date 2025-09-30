<template>
  <h1>My first VUE APP</h1>
  <hr />
  <MyCounter :value="5"/>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';

</script>
