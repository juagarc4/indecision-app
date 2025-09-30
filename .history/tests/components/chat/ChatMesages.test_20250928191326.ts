import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';

describe('Tests <ChatMessages/>>', () => {
  test('Renders chat messages correctly', () => {
    const wrapper = mount(ChatMessages);
  });
});
