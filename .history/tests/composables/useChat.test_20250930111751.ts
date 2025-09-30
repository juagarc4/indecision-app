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

  test('Responds a message after 1.5 sec. if text is a question', async () => {
    const text = 'Are you Ok?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, herMessage] = messages.value;
    expect(messages.value.length).toBe(2);
    expect(herMessage.isMine).toBe(false);
    expect(myMessage).toEqual({
      id: expect.any(Number),
      message: text,
      isMine: true,
    });
    expect(herMessage).toEqual({
      id: expect.any(Number),
      message: expect.any(String),
      isMine: false,
      image: expect.any(String),
    });
  });
  test('Mocks FetchAPI and responds a message after 1.5 sec. if text is a question', async () => {
    window.fetch = vi.fn();
    const text = 'Are you Ok?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 1600));
  });
});
