import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMessages </div>',
};
describe('Tests <IndecisionView/>', () => {
  test('Renders chat messages and messagebox properly', () => {
    const wrapper = mount(IndecisionView);

    const chatMessages = wrapper.findComponent(ChatMessages);
    const messageBox = wrapper.findComponent(MessageBox);

    expect(chatMessages.exists()).toBe(true);
    expect(messageBox.exists()).toBe(true);
  });
  test('Calls onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });
    const messageBoxComponent = wrapper.findComponent(MessageBox);
    messageBoxComponent.vm.$emit('sendMessage', 'Hi World');

    await new Promise((r) => setTimeout(r, 150));
  });
});
