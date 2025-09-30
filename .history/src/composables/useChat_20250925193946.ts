import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onMessage = (text: string) => {
    if (text.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      isMine: true,
      message: text,
    });
  };
  return {
    messages,
    onMessage,
  };
};
