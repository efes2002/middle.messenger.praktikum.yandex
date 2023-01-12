import Block, { Children, Props } from '../../utils/block';
// eslint-disable-next-line import/no-cycle
import { ACTION, dispatch } from '../../utils/dispatch';
// eslint-disable-next-line import/no-cycle
import authController from '../../controllers/AuthController';
import { BASE_URL_AVATAR } from '../../utils/constants';
import store from '../../utils/store';
// eslint-disable-next-line import/no-cycle

export default class Messenger extends Block {
  constructor(props: Props) {
    super({
      ...props,
      submitForm: (_element: HTMLElement, _children: Children, event: Event) => {
        dispatch(ACTION.submitForm, { event });
      },
      logOut: () => {
        authController.logout();
      },
      avatarUrl: `${BASE_URL_AVATAR}${store.getState().user.avatar}`,
    });
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
                    {{{Chats chatsData=main.chats}}}
                    <nav class="bottom-menu">
                        <ul class="main__bottom-menu">
                            <li class="main__setting cursor-hover">
                                {{{LinkImg
                                    className="main__setting-button"
                                    link="/settings"
                                    src="static/img16.svg"
                                    alt="кнопка настройки"
                                }}}
                                {{{Link
                                    className="main__profile-text"
                                    link="/settings"
                                    label="Настройки"
                                }}}
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
                        </ul>
                    </nav>
                </section>
                <section class="main__right">
                    <nav class="main__right-top">
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
