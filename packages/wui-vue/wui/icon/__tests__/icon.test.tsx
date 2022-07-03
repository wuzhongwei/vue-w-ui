import { mount } from '@vue/test-utils'
import {Icon} from '..'

describe('Icon', () => {
  it('render', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Icon color="#000000" size={18} />
        }
      }
    })
    expect(wrapper.element.getAttribute('style')).toContain(`--color: #000000`)
    expect(wrapper.element.getAttribute('style')).toContain(`font-size: 18px`)
  })
})
