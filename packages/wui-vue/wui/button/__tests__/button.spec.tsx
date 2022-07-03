import { markRaw, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { Loading, Search } from '@element-plus/icons-vue';
import { Button, ButtonGroup } from '..';
import {IButtonSize} from '../src/button-type'
// toRaw，将响应式对象（由 reactive定义的响应式）转换为普通对象。
// markRaw，标记一个对象，使其不能成为一个响应式对象。
const AXIOM = 'who are you'

describe('Button', () => {
  it('create', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button type="primary" />
        }
      }
    })

    expect(wrapper.classes()).toContain('w-button--primary')
  })

  it('icon', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button icon={markRaw(Search)} />
        }
      }
    })

    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  it('nativeType', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button nativeType="submit" />
        }
      }
    })

    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('loading', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button loading />
        }
      }
    })

    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
  })

  it('size', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button size="large" />
        }
      }
    })

    expect(wrapper.classes()).toContain('w-button--large')
  })

  it('plain', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button plain />
        }
      }
    })

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('round', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button round />
        }
      }
    })

    expect(wrapper.classes()).toContain('is-round')
  })

  it('circle', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button circle />
        }
      }
    })

    expect(wrapper.classes()).toContain('is-circle')
  })

  it('text', async () => {
    const bg = ref(false)

    const wrapper = mount({
      setup() {
        return () => {
          return <Button text bg={bg.value} />
        }
      }
    })

    expect(wrapper.classes()).toContain('is-text')
    bg.value = true
    await nextTick()
    expect(wrapper.classes()).toContain('is-has-bg')
  })

  it('link', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button link />
        }
      }
    })

    expect(wrapper.classes()).toContain('is-link')
  })

  it('render text', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button v-slots={{default: () => AXIOM}} />
        }
      }
    })
    
    expect(wrapper.text()).toEqual(AXIOM)
  })

  it('handle click', async () => {
    const wrapper = mount({
      setup () {
        return () => {
          return <Button v-slots={{default: () => AXIOM}} />
        }
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
  })

  it('handle click inside', async () => {
    const wrapper = mount({
      setup () {
        return () => {
          return <Button v-slots={{
            default: () => <span class="inner-slot"></span>,
          }} />
        }
      }
    })

    await wrapper.find('.inner-slot').trigger('click')

    expect(wrapper.emitted('click')).toBeDefined()
  })

  it('loading implies disabled', async () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button loading />
        }
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button disabled />
        }
      }
    })
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('loadingIcon', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button loadingIcon={markRaw(Search)} loading />
        }
      }
    })

    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  it('loading slot', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Button v-slots={{
            loading: () => <span class="custom-loading">111</span>
          }}> Loading </Button>
        }
      }
    })
    expect(wrapper.find('.custom-loading').exists()).toBeTruthy()
  })
})

describe('Button Group', () => {
  it('create', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <ButtonGroup> 
            <Button type="primary">prev</Button>
            <Button type="primary">next</Button>
          </ButtonGroup>
        }
      }
    })
    expect(wrapper.classes()).toContain('w-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })

  it('button group reactive size', async () => {
    const size = ref<IButtonSize>('small')
    const wrapper = mount({
      setup() {
        return () => {
          return <ButtonGroup size={size.value}> 
            <Button type="primary">prev</Button>
            <Button type='primary'>next</Button>
          </ButtonGroup>
        }
      }
    })
    expect(wrapper.classes()).toContain('w-button-group')
    expect(wrapper.findAll('.w-button--small').length).toBe(2)

    size.value = 'large'
    await nextTick()
    expect(wrapper.findAll('.w-button--large').length).toBe(2)
  })

  it('button group type', () => {
    const wrapper = mount({
      setup() {
        return () =>{
          return <ButtonGroup type="warning">
            <Button type="primary">prev</Button>
            <Button>next</Button>
          </ButtonGroup>
        }
      }
    })

    expect(wrapper.classes()).toContain('w-button-group')
    expect(wrapper.findAll('.w-button--primary').length).toBe(1)
    expect(wrapper.findAll('.w-button--warning').length).toBe(1)
  })
})
