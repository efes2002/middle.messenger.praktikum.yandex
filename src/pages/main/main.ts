import Block, { Children, Props } from '../../utils/block';
// eslint-disable-next-line import/no-cycle
import { ACTION, dispatch } from '../../utils/dispatch';
// eslint-disable-next-line import/no-cycle
import { router } from '../../index';

export default class Main extends Block {
  constructor(props: Props) {
    super({
      ...props,
      submitForm: (_element: HTMLElement, _children: Children, event: Event) => {
        dispatch(ACTION.submitForm, { event });
      },
      router: (str: string) => {
        router.go(str);
      },
    });
  }

  render() {
    // language=hbs
    return `
            <div class="main">
                <section class="main__left">
                    <article class="main__left-top">
                        <img class="main__avatar" 
                             src="static/Avatarka.webp"
                             alt="Это ваш Аватар"/>
                        <input class="main__list-search" value="Поиск"></input>
                    </article>
                    {{{Chats chatsData=main.chats}}}
                    <nav class="bottom-menu">
                        <ul class="main__bottom-menu">
                            <li class="main__setting cursor-hover" onclick="togglePage('profile')">
                                <div class="main__setting-button"></div>
                                <div class="main__setting-text">Настройки</div>
                            </li>
                            <a class="main__profile cursor-hover" href="/profile">
                                <div class="main__profile-button"></div>
                                <div class="main__profile-text">Профиль</div>
                            </a>
                        </ul>
                    </nav>
                </section>
                <section class="main__right">
                    <nav class="main__right-top">
                        <a class="main__link-exit cursor-hover" href="login">Выход</a>
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
