<template>
  <h1>My first VUE APP</h1>
  <hr />
  <MyCounter :value="5"/>
  <MyCounterScript :value="5"/>
  <MyCounterScript2 :value="3"/>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';

</script>
