<template>
  <section>
    <h3>Counter: {{  counter  }}</h3>
    <h3>Square: {{  suqareCounter  }}</h3>

    <div>
      <button class="p-5 bg-blue-500 rounden mr-2" @click="incrementCounter">+1</button>
      <button class="p-5 bg-blue-500" @click="decrementCounter">-1</button>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps<{
  value: number;
}>();

const counter = ref( props.value );
const suqareCounter = computed(() => counter.value * counter.value);

const incrementCounter = () => counter.value++;
const decrementCounter = () => counter.value--;

</script>
