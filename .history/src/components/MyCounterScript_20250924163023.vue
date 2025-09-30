<template>
  <section>
    <h3>Counter: {{  counter  }}</h3>
    <h3>Square: {{  squareCounter  }}</h3>

    <div>
      <button @click="incrementCounter">+1</button>
      <button @click="decrementCounter">-1</button>
    </div>

  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  const props = defineProps<{
  value: number;
}>();
const { counter, squareCounter} = useCounter(10)
  props: {
    value: { type: Number, required: true }
  },
  setup( props ){
    const counter = ref( props.value );
    const squareCounter = computed(() => counter.value * counter.value);
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

// const props = defineProps<{
//   value: number;
// }>();

// const counter = ref( props.value );
// const suqareCounter = computed(() => counter.value * counter.value);

// const incrementCounter = () => counter.value++;
// const decrementCounter = () => counter.value--;

</script>
