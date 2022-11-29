import Block from "../../utils/block";
import {ACTION, dispatch} from "../../utils/state";

export class Login extends Block {
    constructor(props) {
        super({
            ...props,
            submitForm: (element, children, event) => {
                dispatch(ACTION.submitForm, { event: event });
                renderPage('main');
            },
        });
    }
    render() {
        //language=hbs
        return `
            <section class="form-box">
                <form class="form" id="formUserLogin">
                    <h1 class="form__title">Вход</h1>
                    <div class="form__lists">
                        {{{ FormElement
                                form="formUserLogin"
                                name='login'
                                title='Логин'
                                value=''
                                id='loginPageLogin'
                                errorText='Не валидный Логин' }}}
                        {{{ FormElement
                                form="formUserLogin"
                                name='password'
                                title='Пароль'
                                value=''
                                id='loginPagePassword'
                                errorText='Не валидный пароль' }}}
                    </div>
                    {{#if errorBox.isErrorBox}}
                        <div class="form__sign-box">Неверный логин или пароль</div>
                    {{/if}}
                    {{{Button
                            className="form__button cursor-hover"
                            nameInput=nameInput
                            label='Войти'
                            onclick=submitForm
                            form="formUserLogin"}}}
                    <a class="form__link cursor-hover" onclick="renderPage('registration')">Нет аккаунта?</a>
                </form>
            </section>
        `;
    }
}
