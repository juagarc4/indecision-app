<template>
  <section>
    <h3>Counter: {{  counter  }}</h3>
    <h3>Square: {{  squareCounter  }}</h3>

    <div>
      <button class="btn" @click="incrementCounter">+1</button>
      <button class="btn" @click="decrementCounter">-1</button>
    </div>

  </section>
</template>

<script lang="ts" src="./MyCounterScript2"></script>
<style scope>
 @reference "tailwindcss";

.btn {
  @apply p-2 bg-blue-500 hover:bg-blue-700 rounded m-2;
}
</style>
