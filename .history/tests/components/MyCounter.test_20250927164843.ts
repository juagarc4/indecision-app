import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('Testing MyCounter component', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
  });
});
