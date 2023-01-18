import Block, { Props } from '../../utils/block';

export default class ButtonSimple extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          props.onclick(event);
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <button class="{{className}}" type="button" form="{{form}}">{{label}}</button>`;
  }
}
