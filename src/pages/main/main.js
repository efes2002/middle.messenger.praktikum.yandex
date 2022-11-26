import Block from "../../utils/block";

export class Main extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => console.log(5),
        });
    }
    render() {
        //language=hbs
        return `
            <div class="main">
                <section class="main__left">
                    <article class="main__left-top">
                        <div class="main__avatar"></div>
                        <input class="main__list-search" value="Поиск"></input>
                    </article>
                    {{{Chats chatsData=chats}}}
                    <nav class="bottom-menu">
                        <ul class="main__bottom-menu">
                            <li class="main__setting cursor-hover" onclick="renderPage('profile')">
                                <div class="main__setting-button"></div>
                                <div class="main__setting-text">Настройки</div>
                            </li>
                            <li class="main__profile cursor-hover" onclick="renderPage('profile')">
                                <div class="main__profile-button"></div>
                                <div class="main__profile-text">Профиль</div>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section class="main__right">
                    <nav class="main__right-top">
                        <a class="main__link-exit cursor-hover" onclick="renderPage('login')">Выход</a>
                    </nav>
                    {{{Messages messagesData=messages}}}
                    <section class="main__right-bottom">
                        <div class="chats__button-message-file"></div>
                        <div class="chats__input-message-box"></div>
                        <div class="chats__button-message-text"></div>
                    </section>
                </section>
            </div>
        `;
    }
}
