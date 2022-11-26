import Block from "../../utils/block";

export class ErrorPage2 extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => console.log(5)
        });
    }
    render() {
        //language=hbs
        return `
            <section class="error-page">
                <h1 class="error-page__title">{{title}}</h1>
                <h2 class="error-page__subtitle">{{subtitle}}</h2>
                <a class="error-page__link cursor-hover" onclick="renderPage('chats2')">{{linktitle}}</a>
            </section>
        `;
    }
}
