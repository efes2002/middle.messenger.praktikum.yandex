import Block from '../../../utils/block';

export default class AddFileMessage extends Block {
  constructor(props: any) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            <button class="main__button-message-file cursor-hover"></button>
        `;
  }
}
