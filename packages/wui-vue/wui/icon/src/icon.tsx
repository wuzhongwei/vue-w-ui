import { defineComponent, SetupContext, computed } from 'vue';
import { iconProps, IconProps } from './icon-types'
import './icon.scss';
import useIcon from './use-icon'
import { addUnit, isUndefined } from '../../shared/utils'
export default defineComponent({
  name: 'WIcon',
  props: iconProps,
  setup (props: IconProps, ctx: SetupContext) {
    const { classes } = useIcon(props, ctx);
    const style = computed(() => ({
      fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
      '--color': props.color,
    }))

    return () => (
      <i class={[classes.value]} style={style.value}>
        {ctx.slots.default?.()}
      </i>
    );
  },
});
