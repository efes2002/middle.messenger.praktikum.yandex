import Block, { Props } from '../../utils/block';
import store from '../../utils/store';
import ChatsController from '../../controllers/ChatsController';

export default class Messenger extends Block {
  constructor(props: Props) {
    super({
      ...props,
      chatsData: store.getState().chats,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    ChatsController.fetchChats();
  }

  render() {
    // language=hbs
    return `
        <div class="main">
            <section class="main__left">
                {{{MessengerLeftTop}}}
                {{{Chats clickSelectChat=clickSelectChat}}}
                {{{MessengerLeftBottom}}}
            </section>
            <section class="main__right">
                {{{MessengerRightTop}}}
                {{{Messages messagesData=main.messages}}}
                {{{MessengerRightBottom}}}
            </section>
        </div>
    `;
  }
}
