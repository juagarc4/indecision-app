<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';

interface Props {
 messages: ChatMessage[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->

        <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :is-mine="message.isMine"
        :message="message.message"/>
        <ChatBubble :is-mine="false" :message="'Yes'" :image="'https://yesno.wtf/assets/yes/7-653c8ee5d3a6bbafd759142c9c18d76c.gif'"/>
      </div>
    </div>
</template>
