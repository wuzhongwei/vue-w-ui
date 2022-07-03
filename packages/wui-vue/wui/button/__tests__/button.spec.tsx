import { markRaw, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { Loading, Search } from '@element-plus/icons-vue';
import { Button } from '..';
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

  })
})
