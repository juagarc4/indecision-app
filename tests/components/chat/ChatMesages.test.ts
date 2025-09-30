import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hello', isMine: true },
  { id: 2, message: 'Mundo', isMine: false, image: 'https://hola-munod.jpg' },
];
describe('Tests <ChatMessages/>', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages,
    },
  });
  test('Renders chat messages correctly', () => {
    const chatBubble = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(chatBubble.length).toBe(messages.length);
  });

  test('Should scroll down to the bottom after messages update', async () => {
    const scrollToMock = vi.fn();
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hi', isMine: true }],
    });

    await new Promise((r) => setTimeout(r, 150));

    expect(scrollToMock).toHaveBeenCalled();
    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });
});
