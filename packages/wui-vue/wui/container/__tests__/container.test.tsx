import {ref, nextTick} from 'vue'
import { mount } from '@vue/test-utils'
import { Container, Header, Main, Footer, Aside } from '..';
import {direction} from '../src/types'
import {getStyleValue} from '../../shared/utils'
const AXIOM = 'who are you'
describe('Container', () => {
  it('container render test', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Container v-slots={{default: () => AXIOM}} />
        }
      }
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  it('vertical', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Container>
            <Header></Header>
            <Footer></Footer>
          </Container>
        }
      }
    })
    expect(wrapper.classes('is-vertical')).toBe(true)
  })

  it('direction', () => {
    let direction = ref<direction>('horizontal')
    const wrapper = mount({
      setup() {
       
        return () => {
          return <Container direction={direction.value}>
            <Header></Header>
            <Main></Main>
          </Container>
        }
      }
    })

    expect(wrapper.classes('is-horizontal')).toBe(true)
    direction.value = 'vertical'
    nextTick(() => {
      expect(wrapper.classes('is-vertical')).toBe(true)
    })
  })
})

describe('Header', () => {
  it('create header', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Header></Header>
        }
      }
    })
    expect(wrapper.classes()).toContain('w-header')
  })

  it('header height', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Header height="200px" />
        }
      }
    })
    console.log('wrapper', getStyleValue(wrapper.attributes('style'), 'height'))
    expect(getStyleValue(wrapper.attributes('style'), 'height')).toEqual('200px')
  })
})

describe('Main', () => {
  it('main create', () => {
    let wrapper = mount({
      setup() {
        return () => {
          return <Main />
        }
      }
    })
    expect(wrapper.classes()).toContain('w-main')
  })
})

describe('Footer', () => {
  it('footer create', () => {
    let wrapper = mount({
      setup() {
        return () => {
          return <Footer />
        }
      }
    })
    expect(wrapper.classes()).toContain('w-footer')
  })

  it('footer height', () => {
    let wrapper = mount({
      setup() {
        return () => {
          return <Footer height='300px' />
        }
      }
    })
    expect(getStyleValue(wrapper.attributes('style'), 'height')).toEqual('300px')
  })
})

describe('Aside', () => {
  it('aside create', () => {
    let wrapper = mount({
      setup() {
        return () => {
          return <Aside />
        }
      }
    })
    expect(wrapper.classes()).toContain('w-aside')
  })

  it('aside width', () => {
    let wrapper = mount({
      setup() {
        return () => {
          return <Aside width='300px' />
        }
      }
    })

    expect(getStyleValue(wrapper.attributes('style'), 'width')).toEqual('300px')
  })
})