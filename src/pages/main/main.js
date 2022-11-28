import Block from "../../utils/block";
import {ACTION, dispatch} from "../../utils/state";

export class Main extends Block {
    constructor(props) {
        super({
            ...props,
            submitForm: (element, children, event) => {
                dispatch(ACTION.submitForm, { event: event });
            },
        });
    }
    render() {
        //language=hbs
        return `
            <div class="main">
                <section class="main__left">
                    <article class="main__left-top">
                        <img class="main__avatar" src="static/Avatarka.webp"/>
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
                    {{{ Messages messagesData=messages isOpenPopup=isOpenPopup }}}
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
