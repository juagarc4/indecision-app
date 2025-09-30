import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value);
    const incrementCounter = () => counter.value++;
    const decrementCounter = () => counter.value--;
    return {
      counter,
      squareCounter,
      incrementCounter,
      decrementCounter,
    };
  },
});
