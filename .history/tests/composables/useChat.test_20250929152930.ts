import { useChat } from '@/composables/useChat';

describe('useChat', () => {
  test('Add message correctlñy when onMessage is called', async () => {
    const text: 'Hello world';
    const { messages, onMessage } = useChat();

    await onMessage();
  });
});
