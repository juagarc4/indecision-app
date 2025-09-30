<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola Mundo',
    isMine: true,
  },
  {
    id: new Date().getTime(),
    message: 'Coffee?',
    isMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'Yes',
    isMine: false,
    image: 'https://yesno.wtf/assets/yes/7-653c8ee5d3a6bbafd759142c9c18d76c.gif',
  }
]);

const onMessage = (text:string) => {
  messages.value.push({
    id: new Date().getTime(),
    isMine: true,
    message: text
  })
}

</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages/>

    <MessageBox @send-message="" />
  </div>
</template>
