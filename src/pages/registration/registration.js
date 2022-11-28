import Block from "../../utils/block";
import {ACTION, dispatch} from "../../utils/state";

export class Registration extends Block {
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
                <form class="form" id="formUserReg">
                    <h1 class="form__title">Регистрация</h1>
                    <div class="form__lists">
                        {{{ FormElement
                                form="formUserReg"
                                name='email' 
                                title='Почта' 
                                value='' 
                                id='regPageEmail'
                                isError=false 
                                errorText='Не валидный email' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='login' 
                                title='Логин' 
                                value='' 
                                id='regPageLogin'
                                isError=false 
                                errorText='Не валидный login' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='first_name' 
                                title='Имя' 
                                value='' 
                                id='regPageFirstName'
                                isError=false 
                                errorText='Не валидное Имя' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='second_name' 
                                title='Фамилия' 
                                value='' 
                                id='regPageLastName'
                                isError=false 
                                errorText='Не валидная Фамилия' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='phone' 
                                title='Телефон' 
                                value='' 
                                id='regPagePhone'
                                isError=false 
                                errorText='Не валидный телефон' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='password' 
                                title='Пароль' 
                                value='' 
                                id='regPagePassword'
                                isError=false 
                                errorText='Не валидный пароль' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='passwordSecond' 
                                title='Пароль (ещё раз)' 
                                value='' 
                                id='regPageSecondPassword'
                                isError=false 
                                errorText='Пароли не совпадают' }}}
                    </div>
                    {{{Button
                            className="form__button cursor-hover"
                            nameInput=nameInput
                            label='Зарегистрироваться'
                            onclick=submitForm
                            form="formUserReg"}}}
                    <a class="form__link cursor-hover" onclick="renderPage('main')">Войти</a>
                </form>
            </section>
        `;
    }
}
