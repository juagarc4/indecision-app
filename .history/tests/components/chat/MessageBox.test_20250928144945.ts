import { mount } from '@vue/test-utils';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('Test <MessageBox/>', () => {
  test('Renders input and button properly', () => {
    const wrapper = mount(MessageBox);

    console.log(wrapper.html());
  });
});
