import { useChat } from '@/composables/useChat';

describe('useChat', () => {
  test('Add message correctlñy when onMessage is called', async () => {
    const text = 'Hello world';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].isMine).toBe(true);
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      isMine: true,
      message: text,
    });
  });

  test('Add nothing if text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('Responses a message after 1,.5 sec. if text is a question', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });
});
