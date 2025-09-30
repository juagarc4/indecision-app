import { computed, ref } from 'vue';

export const useCounter = () => {
  const counter = ref(5);
  const suqareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    suqareCounter,
  };
};
