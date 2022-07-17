import { defineComponent, computed, CSSProperties, provide } from 'vue';
import { rowProps, RowProps, rowInjectionKey } from './types'
import { useNamespace } from '../../shared/hooks/use-namespace';
import './row.scss';
export default defineComponent({
  name: 'WRow',
  props: rowProps,
  setup (props: RowProps, {slots}) {
    const ns = useNamespace('row');
    const style = computed(() => {
      const styles: CSSProperties = {}
      if (!props.gutter) return styles
      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`
      return styles
    })
    const gutter = computed(() => props.gutter)

    provide(rowInjectionKey, {
      gutter
    })

    return () => {
      return <props.tag 
        class={[
          ns.b(), 
          props.justify !== 'start' && ns.is(`justify-${props.justify}`), 
          props.align !== 'top' && ns.is(`align-${props.align}`)
        ]} style={style.value}>
        {slots.default?.()}
      </props.tag>
    };
  },
});
