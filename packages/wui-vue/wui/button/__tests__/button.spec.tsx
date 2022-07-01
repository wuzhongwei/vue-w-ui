import { mount } from '@vue/test-utils';
import { Button } from '..';

describe('Button', () => {
  it('create', () => {
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
