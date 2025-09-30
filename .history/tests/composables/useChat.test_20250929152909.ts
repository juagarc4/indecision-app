import { useChat } from '@/composables/useChat';

describe('useChat', () => {
  test('Add message correctlñy when onMessage is called', () => {
    const text: 'Hello world';
    const { messages, onMessage } = useChat();
  });
});
