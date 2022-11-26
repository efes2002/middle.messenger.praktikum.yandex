import Block from "../../utils/block";

export class Chats2 extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => console.log(5)
        });
    }
    render() {
        //language=hbs
        return `
            <div class="chats">
                <section class="chats__left">
                    <article class="chats__left-top">
                        <div class="chats__avatar"></div>
                        <input class="chats__list-search" value="Поиск"></input>
                    </article>
                    <ul class="chats__list-users">
                        <li class="chats__users-box">
                            <div class="chats__users-avatar">
                                <div class="chats__avatar-img"></div>
                            </div>
                            <div class="chats__list-user">
                                <div class="chats__users-time">12:45</div>
                                <div class="chats__users-title">Иван Иванов</div>
                            </div>
                        </li>
                        <li class="chats__users-box">
                            <div class="chats__users-avatar">
                                <div class="chats__avatar-img"></div>
                            </div>
                            <div class="chats__list-user">
                                <div class="chats__users-time">12:45</div>
                                <div class="chats__users-title">Иван Иванов</div>
                            </div>
                        </li>
                        <li class="chats__users-box">
                            <div class="chats__users-avatar">
                                <div class="chats__avatar-img"></div>
                            </div>
                            <div class="chats__list-user">
                                <div class="chats__users-time">12:45</div>
                                <div class="chats__users-title">Иван Иванов</div>
                            </div>
                        </li>
                    </ul>
                    <nav class="bottom-menu">
                        <ul class="chats__bottom-menu">
                            <li class="chats__setting cursor-hover" onclick="renderPage('profile2')">
                                <div class="chats__setting-button"></div>
                                <div class="chats__setting-text">Настройки</div>
                            </li>
                            <li class="chats__profile cursor-hover" onclick="renderPage('profile2')">
                                <div class="chats__profile-button"></div>
                                <div class="chats__profile-text">Профиль</div>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section class="chats__right">
                    <nav class="chats__right-top">
                        <a class="chats__link-exit cursor-hover" onclick="renderPage('login2')">Выход</a>
                    </nav>
                    <section class="chats__list-message">
                        <a class="chats__link-exit cursor-hover" onclick="renderPage('page4042')">Page 4042</a>
                        <a class="chats__link-exit cursor-hover" onclick="renderPage('page5xx2')">Page 5xx2</a>
                        <div class="chats__message">
                            <div class="chats__message-text"></div>
                            <div class="chats__message-time"></div>
                        </div>
                    </section>
                    <section class="chats__right-bottom">
                        <div class="chats__button-message-file"></div>
                        <div class="chats__input-message-box"></div>
                        <div class="chats__button-message-text"></div>
                    </section>
                </section>
            </div>
        `;
    }
}
