import Block, { Props } from '../../utils/block';

export default class ButtonCancel extends Block {
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
        <button
                class="{{className}}"
                type="button"
        >{{label}}</button>`;
  }
}
