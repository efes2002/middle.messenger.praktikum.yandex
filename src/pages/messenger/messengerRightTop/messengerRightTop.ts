import store from '../../../utils/store';
import Block, { Props } from '../../../utils/block';
// eslint-disable-next-line import/no-cycle
import authController from '../../../controllers/AuthController';
import ChatsController from '../../../controllers/ChatsController';

export default class MessengerRightTop extends Block {
  constructor(props: Props) {
    super({
      ...props,
      selectedChatData: store.getState().selectedChatData,
      logOut: () => {
        authController.logout();
      },
      addUserInChat: () => {

      },
      deleteChat: () => {
        ChatsController.delete(this.props.selectedChatData.id);
      },
      isOpenMenuAddUser: false,
      menuAddUser: {
        open: () => {
          this.props.isOpenMenuAddUser = true;
        },
        close: () => {
          this.props.isOpenMenuAddUser = false;
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <nav class="main__right-top">
            <div class="main__setting-chat-box">
                {{#if selectedChatData.id}}
                    <div class="main__setting-chat">
                        <div class="main__setting-chat-title">
                            {{selectedChatData.title}}, ID-{{selectedChatData.id}}
                        </div>
                        <div class="main__button-add-user">
                            {{{ButtonImg
                                    className="main__button-add-user-img cursor-hover"
                                    src="static/img18.svg"
                                    alt="кнопка добавить пользователя"
                                    onclick=menuAddUser.open
                            }}}
                            {{{Link
                                    className="main__button-title"
                                    onclick=menuAddUser.open
                                    label="Добавить в чат"
                            }}}
                            {{#if isOpenMenuAddUser}}
                                {{{MenuAddUser menuAddUser=menuAddUser}}}
                            {{else}}
                                <div></div>
                            {{/if}}
                        </div>
                        <div class="main__button-delete-chat">
                            {{{ButtonImg
                                    className="main__button-add-user-img cursor-hover"
                                    src="static/img17.svg"
                                    alt="кнопка удалить чат"
                                    onclick=deleteChat
                            }}}
                            {{{Link
                                    className="main__button-title"
                                    onclick=deleteChat
                                    label="Удалить чат"
                            }}}
                        </div>

                    </div>
                {{/if}}
            </div>
            {{{Link
                    className="main__link-exit cursor-hover"
                    link=""
                    label="Выход"
                    onclick=logOut
            }}}
        </nav>
        `;
  }
}
