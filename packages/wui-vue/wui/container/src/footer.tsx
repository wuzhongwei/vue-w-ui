import { defineComponent, computed } from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import {footerProps} from './types'
import './footer.scss';
export default defineComponent({
  name: 'WFooter',
  props: footerProps,
  setup (props, ctx) {
    const ns = useNamespace('footer')
    const style = computed(() => {
      return {height: props.height}
    })
    return () => {
      return <footer class={ns.b()} style={style.value}>{ctx.slots.default()}</footer>
    };
  },
});
