import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';

describe('Tests <IndecisionView/>', () => {
  test('Renders chat messages and messagebox properly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
