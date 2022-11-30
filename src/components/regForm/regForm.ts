import Block from '../../utils/block';

export default class RegForm extends Block {
  constructor(props: any) {
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
