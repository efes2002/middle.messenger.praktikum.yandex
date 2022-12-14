import Block, { Props } from '../../utils/block';

export default class Page500 extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            {{{ErrorPage title="500" subtitle="Мы уже фиксим" linktitle="Назад к чатам"}}}
        `;
  }
}
