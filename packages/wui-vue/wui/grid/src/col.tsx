import { defineComponent, computed, inject, CSSProperties } from 'vue';
import { isNumber, isObject } from '@vueuse/core'
import { colProps, ColProps, rowInjectionKey } from './types'
import { useNamespace } from '../../shared/hooks/use-namespace';
import './col.scss';
export default defineComponent({
  name: 'WCol',
  props: colProps,
  setup (props: ColProps, {slots}) {
    const ns = useNamespace('col');
    const { gutter } = inject(rowInjectionKey, {gutter: computed(() => 0)})

    const className = computed(() => {
      const pos = ['offset', 'pull', 'push'] as const
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      const classes: Record<string, boolean>[] = [
        {
          [props.span ? `${ns.b()}-${props.span}` : '']: true
        }
      ]

      pos.forEach((prop) => {
        const size = props[prop]
        if (isNumber(size)) {
          if (size > 0) {
            classes.push({
              [props[prop] ? `${ns.b()}-${prop}-${size}` : '']: true,
            })
          }
        }
      })
      
      sizes.forEach((prop) => {
        const size = props[prop]
        if (isNumber(size)) {
          classes.push({[`${ns.b()}-${prop}-${size}`]: true})
        }  else if (isObject(size)) {
          Object.entries(size).forEach(([key, value]) => {
            classes.push({
              [key !== 'span' ? `${ns.b()}-${prop}-${key}-${value}` : `${ns.b()}-${prop}-${value}`]: true,
            })
            // console.log(key, value, prop, `${ns.b()}-${prop}-${key}-${value}`)
          })
        }
      })

      // this is for the fix
      if (gutter.value) {
        classes.push({[`${ns.is('guttered')}`]: true})
      }

      return classes
    })
    
    const style = computed(() => {
      const styles: CSSProperties = {}
      if (!gutter.value) return styles
      styles.paddingLeft = styles.paddingRight  = `${gutter.value/2}px`
      return styles
    })
    return () => {
      return <props.tag class={[ns.b(), className.value]} style={style.value}>
        {slots.default?.()}
      </props.tag>
    };
  },
});
