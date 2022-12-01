import Block, { Props } from '../../utils/block';

export default class Page404 extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            {{{ErrorPage title="404" subtitle="Не туда попали" linktitle="Назад к чатам"}}}
        `;
  }
}
