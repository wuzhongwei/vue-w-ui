import { defineComponent, computed, VNode, Component } from 'vue';
import { containerProps, ContainerProps } from './types'
import { useNamespace } from '../../shared/hooks/use-namespace';
import './container.scss';
export default defineComponent({
  name: 'WContainer',
  props: containerProps,
  setup (props: ContainerProps, {slots}) {
    const ns = useNamespace('container');
    return () => {
      const slotsDefault: VNode[] = slots.default?.()
      const className = computed(() => {
        if (props.direction) {
          return ns.is(`is-${props.direction}`)
        } else {
          return slotsDefault.some(item => {
            let tag = (item.type as Component).name
            return tag === 'WHeader' || tag === 'WFooter'
          }) ? ns.is('is-vertical') : ns.is('is-horizontal')
        }
      }) 
      return <section class={[ns.b(), className.value]}>{slotsDefault}</section>
    };
  },
});
