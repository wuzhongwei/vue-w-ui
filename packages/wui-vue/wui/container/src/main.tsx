import { defineComponent } from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import './main.scss';
export default defineComponent({
  name: 'WMain',
  props: [],
  setup (props, ctx) {
    const ns = useNamespace('main')
    return () => {
      return <main class={ns.b()}>{ctx.slots.default?.()}</main>
    };
  },
});
