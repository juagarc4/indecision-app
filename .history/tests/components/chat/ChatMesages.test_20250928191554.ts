import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hello', isMine: true },
  { id: 2, message: 'Mundo', isMine: false, image: 'https://hola-munod.jpg'}.
]
describe('Tests <ChatMessages/>>', () => {
  test('Renders chat messages correctly', () => {
    const wrapper = mount(ChatMessages, {
      props: {
        messages: []
      }
    });
  });
});
