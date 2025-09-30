import ChatMessages from '@/components/chat/ChatMessages.vue';
import { mount } from '@vue/test-utils';

describe('Tests <ChatMessages/>>', () => {
  test('Renders chat messages correctly', () => {
    const wrapper = mount(ChatMessages);
  });
});
