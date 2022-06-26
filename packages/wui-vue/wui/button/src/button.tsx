import { defineComponent, toRefs } from 'vue';
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
    const { icon, disabled, loading, nativeType, loadingIcon }  = toRefs(props)
    const onClick = () => {
      console.log(props)
    }
    return () => {
      return (
        <button type={nativeType.value} disabled={disabled.value || loading.value} aria-disabled={disabled.value || loading.value} class={classes.value} onClick={onClick}>
          {ctx.slots.loading && ctx.slots.loading()}
          {!ctx.slots.loading && loading.value && loadingIcon.value && <Icon class={iconClass.value}>{(loadingIcon.value as any).render()}</Icon>}
          {icon?.value && <Icon>{(icon.value as any).render()}</Icon>}
          {ctx.slots.default && <span class="button-content">{ctx.slots.default()}</span>}
        </button>
      );
    };
  },
});
