<template>
  <section>
    <h3>Counter: {{  counter  }}</h3>
    <h3>Square: {{  squareCounter  }}</h3>

    <div>
      <button class="btn" @click="incrementCounter">+1</button>
      <button  class="btn" @click="decrementCounter">-1</button>
    </div>

  </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';
export default defineComponent({
  props: {
    value: { type: Number, required: true }
  },
  setup( props ){
    const { counter, squareCounter} = useCounter(10);

    const incrementCounter = () => counter.value++;
    const decrementCounter = () => counter.value--;
    return {
      counter,
      squareCounter,
      incrementCounter,
      decrementCounter

    };
  }
});


</script>
<style scope>
 @reference "tailwindcss";

.btn {
  @apply p-2 bg-blue-500 hover:bg-blue-700 rounded m-2;
}
</style>
