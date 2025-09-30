<template>
  <section>
    <h3>Counter: {{  counter  }}</h3>
    <h3 data-testid="square-label">Square: {{  squareCounter  }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const props = defineProps<{
  value: number;
}>();
const { counter, squareCounter} = useCounter(props.value)

</script>
