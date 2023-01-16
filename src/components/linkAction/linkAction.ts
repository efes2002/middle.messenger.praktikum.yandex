// eslint-disable-next-line import/no-cycle
import Block, { Props } from '../../utils/block';

export default class LinkActive extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          props.onclick(this, props, event);
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <a class="{{className}}" href="{{link}}">{{label}}</a>`;
  }
}
