import Block from "../../utils/block";

export class Profile extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <section class="profile">
                <img class="profile__avatar cursor-hover"></img>
                <h1 class="profile__title">Иван</h1>
                <ul class="profile__items">
                    {{#each items}}
                        <li class="profile__item cursor-hover_green" id={{id}}>
                            <h2 class="profile__item-title">{{title}}</h2>
                            <div class="profile__item-value" name={{name}}>{{value}}</div>
                        </li>
                    {{/each}}
                </ul>
                <div class="profile__box-link cursor-hover" onclick="renderPage('chats')">
                    <img class="profile__img-link"></img>
                    <div class="profile__title-link">Назад</div>
                </div>
                <div class="profile__exit cursor-hover" onclick="renderPage('login')">Выйти из приложения</div>
            </section>
        `;
    }
}
