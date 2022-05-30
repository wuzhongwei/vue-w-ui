import { defineComponent } from 'vue';
import { buttonProps } from './button-type'
import './button.scss';
import useButton from './use-button';

export default defineComponent({
  name: 'WButton',
  props: buttonProps,
  setup (props, ctx) {
    const { classes } = useButton(props, ctx);
    return () => {
      return (
        <button type='button' class={classes.value}>
          <span class="button-content">{ctx.slots.default?.()}</span>
        </button>
      );
    };
  },
});
