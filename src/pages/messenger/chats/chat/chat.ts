import Block, { Props } from '../../../../utils/block';
import store from '../../../../utils/store';
import ChatsController from '../../../../controllers/ChatsController';

export default class Chat extends Block {
  constructor(props: Props) {
    super({
      ...props,
      isSelect: props.id === store.getState().selectedChatId,
      events: {
        click: () => {
          ChatsController.selectChat(props.id);
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
            <li class="chat__users-box {{#if isSelect}}chat__users-box_action{{/if}}">
                <div class="chat__users-avatar">
                    <div class="chat__avatar-img"></div>
                </div>
                <div class="chat__list-user">
                    <div class="chat__users-time">{{time}}</div>
                    <div class="chat__users-title">{{title}}</div>
                </div>
            </li>
        `;
  }
}
