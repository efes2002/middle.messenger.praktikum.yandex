import Block from "../../utils/block";

export class StartForm extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <section class="form-box">
                <form class="form" id="formUser" onsubmit="((event)=>{event.preventDefault(); renderPage('main');})">
                    <h1 class="form__title">{{title}}</h1>
                    <div class="form__lists">
                        {{#each items}}
                            <label class="form__field" id={{id}}>
                                <h2 class="form__input-title">{{title}}</h2>
                                <input class="form__input"
                                       value={{value}}
                                       name={{name}}></input>
                                <div class="form__input-line"></div>
                                <span class="form__input-error"/>
                                {{#if error}} {{errorText}} {{/if}}
                                </span>
                            </label>
                        {{/each}}
                    </div>

                    {{#if errorBox.isErrorBox}}
                        <div class="form__sign-box">{{errorBox.text}}</div>
                    {{/if}}

                    {{#if isLogin}}
                        <button class="form__button cursor-hover" type="submit" form="formUser">{{button.title}}</button>
                        <a class="form__link cursor-hover" onclick="renderPage('registration')">{{link.title}}</a>
                    {{/if}}

                    {{#if isRegis}}
                        <button class="form__button cursor-hover" type="submit" form="formUser">{{button.title}}</button>
                        <a class="form__link cursor-hover" onclick="renderPage('main')">{{link.title}}</a>
                    {{/if}}
                </form>
            </section>
        `;
    }
}
