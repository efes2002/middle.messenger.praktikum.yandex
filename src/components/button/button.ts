import Block, { Props } from '../../utils/block';

export default class Button extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          props.onclick(this, props, event);
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <button class="{{className}}" type="button" form={{form}}>{{label}}</button>`;
  }
}
