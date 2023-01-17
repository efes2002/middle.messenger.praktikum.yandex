import Block, { Props } from '../../../utils/block';

export default class MessengerLeftBottom extends Block {
  constructor(props: Props) {
    super({
      ...props,
      isOpenMenuCreateChat: false,
      menuCreateChat: {
        open: () => {
          this.props.isOpenMenuCreateChat = true;
        },
        close: () => {
          this.props.isOpenMenuCreateChat = false;
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <nav class="bottom-menu">
            <ul class="main__bottom-menu">
                <li class="main__setting cursor-hover">
                    {{{ButtonImg
                            className="main__button-creat-chat cursor-hover"
                            src="static/img19.svg"
                            alt="кнопка Создать чат"
                            onclick=menuCreateChat.open
                    }}}
                    {{{Link
                            className="main__button-title"
                            onclick=menuCreateChat.open
                            label="Создать чат"
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
                {{#if isOpenMenuCreateChat}}
                    {{{MenuCreateChat menuCreateChat=menuCreateChat}}}
                {{else}}
                    <div/>
                {{/if}}
            </ul>
        </nav>
        `;
  }
}
