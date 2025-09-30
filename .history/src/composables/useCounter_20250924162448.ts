import { computed, ref } from 'vue';

export const useCounter = () => {
  const counter = ref(5);
  const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    squareCounter,
  };
};
