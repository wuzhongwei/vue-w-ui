import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest'
// import { useNamespace } from '../../shared/hooks/use-namespace';
import { Button } from '..';


describe('Button', () => {
  it('create', () => {
    // const wrapper = mount(Button)
    const wrapper = mount({
      setup() {
        return () => {
          return <Button type="primary">确定</Button>;
        };
      }
    });
    expect(wrapper.classes()).toContain('w-button--primary')
  });

});
