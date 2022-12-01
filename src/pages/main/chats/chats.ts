import Block, { Props } from '../../../utils/block';

export default class Chats extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            <ul class="chats__list-users">
                {{#each chatsData}}
                    {{{Chat time=time name=name}}}
                {{/each}}
            </ul>
        `;
  }
}
