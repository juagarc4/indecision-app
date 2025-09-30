<template>
  <section>
    <h3>Counter: {{  counter  }}</h3>
    <h3>Square: {{  counter * counter  }}</h3>

    <div>
      <button>+1</button>
      <button>-1</button>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const counter = ref(2);
</script>
