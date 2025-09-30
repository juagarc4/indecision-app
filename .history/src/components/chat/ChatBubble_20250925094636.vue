<template>
  <div v-if="isMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
     {{ message }}
    </div>
  </div>

  <!-- Example Received Message -->
  <div class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      Not too bad, just a bit busy. How about you?
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  isMine: boolean;
  image: string;
}

defineProps<Props>();

</script>
