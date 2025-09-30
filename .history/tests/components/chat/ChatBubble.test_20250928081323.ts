import ChatBubble from '@/components/chat/ChatBubble.vue';

describe('Tests component <ChatBubble/>', () => {
  test('Renders own message correctly', () => {
    const message = 'Hello World';
    const wrapper = mount(ChatBubble);
  });
});
