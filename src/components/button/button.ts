import Block, { Props } from '../../utils/block';

export default class Button extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: (event: Event) => {
          console.log(1, event);


          props.onclick(this, props, event);
          console.log(2, props);
          props.onclick(this, props, event);
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <button
                class="{{className}}"
                type="submit"
                form={{form}}
        >{{label}}</button>`;
  }
}
