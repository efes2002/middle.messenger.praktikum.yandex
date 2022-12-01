import Block, { Props } from '../../utils/block';

export default class RegForm extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            <div>privet {{data4}}</div>
        `;
  }
}
