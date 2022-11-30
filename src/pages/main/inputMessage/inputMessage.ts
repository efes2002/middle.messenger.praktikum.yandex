import Block from '../../../utils/block';

export default class InputMessage extends Block {
  constructor(props: any) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            <input class="main__input-message" name={{name}} form={{form}}></input>
        `;
  }
}
