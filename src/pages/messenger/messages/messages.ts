import Block, { Props } from '../../../utils/block';
import store from '../../../utils/store';

function answer(messages = {}, id = 0) {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const answer: any = Object.entries(messages).find((value: any) => value[0] === `${id}`);
  if (answer) {
    return answer[1].filter((value: any) => value.type === 'message');
  } return [];
}

export default class Messages extends Block {
  constructor(props: Props) {
    super({
      ...props,
      selectedChatId: store.getState().selectedChatId,
      messages: answer(store.getState().messages, store.getState().selectedChatId),
    });
  }

  render() {
    // language=hbs
    return `
            <section class="messages">
                {{#if selectedChatId}}
                    {{#each messages }}
                        {{{Message
                                time=time
                                text=content
                                img=img
                                url=url
                                status=status
                                user_id=user_id
                                is_read=is_read
                        }}}
                    {{/each}}   
                {{else}}
                    <div></div>
                {{/if}}
            </section>
        `;
  }
}
