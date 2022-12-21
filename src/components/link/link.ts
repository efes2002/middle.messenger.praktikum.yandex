// eslint-disable-next-line import/no-cycle
import { router } from '../../index';
import Block, { Props } from '../../utils/block';

export default class Link extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          router.go(props.link);
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
