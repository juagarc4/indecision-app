<template>
  <section>
    <h3>Counter: {{  counter  }}</h3>
    <h3>Square: {{  suqareCounter  }}</h3>

    <div>
      <button>+1</button>
      <button>-1</button>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const counter = ref(2);
const suqareCounter = computed(() => counter.value * counter.value);
</script>
