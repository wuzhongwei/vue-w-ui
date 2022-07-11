import { defineComponent, computed } from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import {headerProps} from './types'
import './header.scss';
export default defineComponent({
  name: 'WHeader',
  props: headerProps,
  setup (props, ctx) {
    const ns = useNamespace('header');
    const style = computed(() => {
      return {height: props.height}
    })
    return () => {
      return <header class={ns.b()} style={style.value}>{ctx.slots.default?.()}</header>
    };
  },
});
