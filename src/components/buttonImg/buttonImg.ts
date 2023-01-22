// eslint-disable-next-line import/no-cycle
import Block, { Props } from '../../utils/block';

export default class ButtonImg extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          props.onclick();
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <img class="{{className}}" src="{{src}}" alt="{{alt}}"></img>
    `;
  }
}
