import Block, { Children, Props } from '../../utils/block';
// eslint-disable-next-line import/no-cycle
import { ACTION, dispatch } from '../../utils/dispatch';
// eslint-disable-next-line import/no-cycle
import authController from '../../controllers/AuthController';
import { BASE_URL_AVATAR } from '../../utils/constants';
import store from '../../utils/store';
import ChatsController from '../../controllers/ChatsController';
// eslint-disable-next-line import/no-cycle

export default class Messenger extends Block {
  constructor(props: Props) {
    // @ts-ignore
    super({
      ...props,
      chatsData: store.getState().chats,
      submitForm: (_element: HTMLElement, _children: Children, event: Event) => {
        dispatch(ACTION.submitForm, { event });
      },
      logOut: () => {
        authController.logout();
      },
      avatarUrl: `${BASE_URL_AVATAR}${store.getState().user.avatar}`,
      selectedChatId: store.getState().selectedChat,
      selectedChatId2: store.getState().selectedChatId2,
      isOpenMenuCreateChat: false,
      menuCreateChat: {
        open: () => {
          this.props.isOpenMenuCreateChat = true;
        },
        close: () => {
          this.props.isOpenMenuCreateChat = false;
        },
      },
      a: console.log('aa', props)
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
                <article class="main__left-top">
                    <img class="main__avatar"
                         src={{avatarUrl}}
                         alt="Это ваш Аватар"/>
                    <input class="main__list-search" value="Поиск"></input>
                </article>
                {{{Chats clickSelectChat=clickSelectChat}}}
                <nav class="bottom-menu">
                    <ul class="main__bottom-menu">
                        <li class="main__setting cursor-hover">
                            {{{ButtonSimple
                                    onclick=menuCreateChat.open
                                    className="main__button-creat-chat"
                                    label="+ Создать чат"}}}
                        </li>
                        <li class="main__profile cursor-hover">
                            {{{LinkImg
                                    className="main__setting-button"
                                    link="/settings"
                                    src="static/img15.svg"
                                    alt="кнопка профиль"
                            }}}
                            {{{Link
                                    className="main__profile-text"
                                    link="/settings"
                                    label="Профиль"
                            }}}
                        </li>
                        {{#if isOpenMenuCreateChat}}
                            {{{MenuCreateChat menuCreateChat=menuCreateChat}}}
                        {{else}}
                            <div/>
                        {{/if}}
                    </ul>
                </nav>
            </section>
            <section class="main__right">
                <nav class="main__right-top">
                    <div class="main__setting-chat-box">
                        {{#if selectedChatId}}
                            <div class="main__setting-chat">
                                Чат:{{selectedChatId}}
                                Имя:{{selectedChatId2.title}}
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
                {{{ Messages messagesData=main.messages }}}
                <form class="main__right-bottom" id="formMessage">
                    {{{AddFileMessage}}}
                    {{{InputMessage form="formMessage" name="message"}}}
                    {{{ButtonSendMessage onclick=submitForm form="formMessage"}}}
                </form>
            </section>
        </div>
    `;
  }
}
