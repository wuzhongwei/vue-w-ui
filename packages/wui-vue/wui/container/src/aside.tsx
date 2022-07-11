import { computed, defineComponent } from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { asidedProps } from './types'
import './aside.scss';
export default defineComponent({
  name: 'WAside',
  props: asidedProps,
  setup (props, ctx) {
    const ns = useNamespace('aside');
    const style = computed(() => {
      return {width: props.width}
    })

    return () => {
      return <aside class={ns.b()} style={style.value}>{ctx.slots.default?.()}</aside>
    };
  },
});
