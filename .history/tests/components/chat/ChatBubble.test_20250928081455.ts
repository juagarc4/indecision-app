import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('Tests component <ChatBubble/>', () => {
  test('Renders own message correctly', () => {
    const message = 'Hello World';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        isMine: true,
      },
    });
  });
});
