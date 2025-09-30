import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

export const useChat = () => {
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
    },
  ]);

  const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      isMine: true,
      message: text,
    });
  };
  return;
};
