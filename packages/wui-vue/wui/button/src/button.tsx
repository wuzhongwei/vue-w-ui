import { defineComponent, toRefs, h } from 'vue';
import type { SetupContext } from 'vue';
import { buttonProps, ButtonProps } from './button-type'
import './button.scss';
import useButton from './use-button';
import {Icon} from '../../icon'

export default defineComponent({
  name: 'WButton',
  props: buttonProps,
  setup (props: ButtonProps, ctx: SetupContext) {
    const { classes, iconClass } = useButton(props, ctx);
    const { icon, disabled, loading, nativeType, loadingIcon } = toRefs(props)

    return () => {
      return (
        <button type={nativeType.value} disabled={disabled.value || loading.value} aria-disabled={disabled.value || loading.value} class={classes.value}>
          {ctx.slots.loading && ctx.slots.loading()}
          {!ctx.slots.loading && loading.value && loadingIcon.value && <Icon class={iconClass.value}>{h(loadingIcon.value)}</Icon>}
          {icon.value && <Icon>{h(icon.value)}</Icon>}
          {ctx.slots.default && <span class="button-content">{ctx.slots.default()}</span>}
        </button>
      );
    };
  },
});
