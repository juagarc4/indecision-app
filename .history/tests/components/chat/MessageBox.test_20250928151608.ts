import { mount } from '@vue/test-utils';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('Test <MessageBox/>', () => {
  const wrapper = mount(MessageBox);
  test('Renders input and button properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('Emits sendMessage when button is clicked with message value', async () => {
    const message = 'Hello World';

    await wrapper.find('input').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect(wrapper.find('input').text()).toBe('');
  });

  test('Emits sendMessage when keypress.enter is triggered with message value', async () => {
    const message = 'Hello World';
    const input = wrapper.find('input[type="text"]');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });
});
