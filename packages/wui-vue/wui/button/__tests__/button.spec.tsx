import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest'
// import { useNamespace } from '../../shared/hooks/use-namespace';
import { Button } from '..';

// const ns = useNamespace('button', true);

// const baseClass = ns.b();
// const solidClass = ns.m('solid');
// const smClass = ns.m('sm');
// const roundClass = ns.m('round');
// const circleClass = ns.m('circle');
// const iconClass = '.icon';

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('w-button')
  });

});
