<template>
  <section>
    <h3>Counter: {{  10  }}</h3>
    <h3>Square: {{  10 * 10  }}</h3>

    <div>
      <button>+1</button>
      <button>-1</button>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const counter = ref(10);
</script>
