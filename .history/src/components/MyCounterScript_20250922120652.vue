<template>
  <section>
    <h3>Counter: {{  counter  }}</h3>
    <h3>Square: {{  suqareCounter  }}</h3>

    <div>
      <button @click="incrementCounter">+1</button>
      <button @click="decrementCounter">-1</button>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup(){
    const counter = ref( 5 );
    const suqareCounter = computed(() => counter.value * counter.value);
  }
})

// const props = defineProps<{
//   value: number;
// }>();

// const counter = ref( props.value );
// const suqareCounter = computed(() => counter.value * counter.value);

// const incrementCounter = () => counter.value++;
// const decrementCounter = () => counter.value--;

</script>
