import Block, { Props } from '../../../utils/block';
import store from '../../../utils/store';

export default class Chats extends Block {
  constructor(props: Props) {
    super({
      ...props,
      chats: store.getState().chats,
    });
  }

  render() {
    // language=hbs
    return `
        <ul class="chats__list-users">
            {{#each chats}}
                {{{Chat
                        id=id
                        title=title
                        created_by=created_by
                        unread_count=unread_count
                        avatar=avatar
                }}}
            {{/each}}
        </ul>
    `;
  }
}
