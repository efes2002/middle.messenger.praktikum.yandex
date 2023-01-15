import Block, { Props } from '../../utils/block';
// eslint-disable-next-line import/no-cycle
import { ACTION, dispatch } from '../../utils/dispatch';
// eslint-disable-next-line import/no-cycle
import store from '../../utils/store';
// eslint-disable-next-line import/no-cycle

export default class Registration extends Block {
  constructor(props: Props) {
    super({
      ...props,
      regError: store.getState().regError,
      submitForm: (_element: Block, _children: Props, event: Event) => {
        event.preventDefault();
        dispatch(ACTION.signup, { element: this, event });
      },
    });
  }

  render() {
    // language=hbs
    return `
            <section class="form-box">
                <form class="form" id="formUserReg">
                    <h1 class="form__title">Регистрация</h1>
                    <div class="form__lists">
                        {{{ FormElement
                                form="formUserReg"
                                name='email' 
                                title='Почта'
                                id='regPageEmail'
                                value=''
                                errorText='Не валидный email' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='login' 
                                title='Логин'
                                id='regPageLogin'
                                value=''
                                errorText='Не валидный login' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='first_name' 
                                title='Имя'
                                id='regPageFirstName'
                                value=''
                                errorText='Не валидное Имя' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='second_name' 
                                title='Фамилия'
                                id='regPageLastName'
                                value=''
                                errorText='Не валидная Фамилия' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='phone' 
                                title='Телефон'
                                id='regPagePhone'
                                value=''
                                errorText='Не валидный телефон' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='password' 
                                title='Пароль'
                                id='regPagePassword'
                                value=''
                                errorText='Не валидный пароль' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='passwordSecond' 
                                title='Пароль (ещё раз)'
                                id='regPageSecondPassword'
                                value=''
                                errorText='Пароли не совпадают' }}}
                    </div>
                    <div class="form__sign-box">{{regError}}</div>
                    {{{Button
                            className="form__button cursor-hover"
                            nameInput=nameInput
                            label='Зарегистрироваться'
                            onclick=submitForm
                            form="formUserReg"}}}

                    {{{Link
                            className="form__link cursor-hover"
                            link="/messenger"
                            label="Войти"
                    }}}
                </form>
            </section>
        `;
  }
}
