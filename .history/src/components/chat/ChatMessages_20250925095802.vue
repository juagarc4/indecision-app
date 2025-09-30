<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';

</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <ChatBubble :is-mine="true" :message="'Hola'"/>
        <ChatBubble :is-mine="false" :message="'Yes'" :image="'https://yesno.wtf/assets/yes/7-653c8ee5d3a6bbafd759142c9c18d76c.gif'"/>
      </div>
    </div>
</template>
