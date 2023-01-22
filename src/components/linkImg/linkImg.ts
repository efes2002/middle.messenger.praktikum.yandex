// eslint-disable-next-line import/no-cycle
import { router } from '../../index';
import Block, { Props } from '../../utils/block';

export default class LinkImg extends Block {
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
        <img class="{{className}}" 
             href="{{link}}"
             src="{{src}}"
             alt="{{alt}}"
        ></img>`;
  }
}
