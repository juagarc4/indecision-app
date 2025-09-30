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
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${initialValue}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${initialValue * initialValue}`,
    );
    expect(counterLabel.text()).toContain(`Counter: ${initialValue}`);
    expect(squareLabel.text()).toContain(`Square: ${initialValue * initialValue}`);
  });
  test('Increments counter when +1 button is clicked', () => {
    const initialValue = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: initialValue,
      },
    });
  });
});
