import Block, { Props } from '../../../../utils/block';

export default class ButtonSendMessage extends Block {
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
             <button class="main__button-message-sent cursor-hover" src="static/img13.svg"></button>
        `;
  }
}
