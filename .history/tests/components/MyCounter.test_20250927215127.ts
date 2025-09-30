import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('Testing MyCounter component', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
  test('Renders the counter value correctly', () => {
    const initialValue = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: initialValue,
      },
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${initialValue}`);
  });
});
