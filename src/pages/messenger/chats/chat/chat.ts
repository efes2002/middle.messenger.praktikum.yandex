import Block, { Props } from '../../../../utils/block';
import store from '../../../../utils/store';
import ChatsController from '../../../../controllers/ChatsController';
import { BASE_URL_AVATAR } from '../../../../utils/constants';

export default class Chat extends Block {
  constructor(props: Props) {
    super({
      ...props,
      isSelect: props.id === store.getState().selectedChatId,
      avatarUrl: `${BASE_URL_AVATAR}${props.avatar}`,
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
                    {{#if avatar}}
                        <img class="main__avatar" src={{avatarUrl}} alt="Аватар-чата"></img>
                    {{else}}
                        <div class="chat__avatar-img-not"></div>
                    {{/if}}
                </div>
                <div class="chat__list-user">
                    <div class="chat__users-time">{{time}}</div>
                    <div class="chat__users-title">{{title}}</div>
                </div>
            </li>
        `;
  }
}
