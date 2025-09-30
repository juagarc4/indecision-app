import ChatBubble from '@/components/chat/ChatBubble.vue';
import { sleep } from '@/helpers/sleep';
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

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);

    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });
  test('Renders received message correctly', () => {
    const message = 'Are you OK?';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        isMine: true,
      },
    });

    sleep(2);

    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
  });
});
