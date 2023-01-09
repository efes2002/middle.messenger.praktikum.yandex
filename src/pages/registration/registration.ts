import Block, { Props } from '../../utils/block';
// eslint-disable-next-line import/no-cycle
import { ACTION, dispatch } from '../../utils/dispatch';
// eslint-disable-next-line import/no-cycle
import { router } from '../../index';
// eslint-disable-next-line import/no-cycle

export default class Registration extends Block {
  constructor(props: Props) {
    super({
      ...props,
      submitForm: (_element: Block, _children: Props, event: Event) => {
        dispatch(ACTION.signup, { element: this, event });
        router.go('/messenger');
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
                                value=''
                                id='regPageEmail'
                                errorText='Не валидный email' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='login' 
                                title='Логин'
                                value=''
                                id='regPageLogin'
                                errorText='Не валидный login' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='first_name' 
                                title='Имя'
                                value=''
                                id='regPageFirstName'
                                errorText='Не валидное Имя' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='second_name' 
                                title='Фамилия'
                                value=''
                                id='regPageLastName'
                                errorText='Не валидная Фамилия' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='phone' 
                                title='Телефон'
                                value=''
                                id='regPagePhone'
                                errorText='Не валидный телефон' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='password' 
                                title='Пароль'
                                value=''
                                id='regPagePassword'
                                errorText='Не валидный пароль' }}}
                        {{{ FormElement
                                form="formUserReg"
                                name='passwordSecond' 
                                title='Пароль (ещё раз)'
                                value=''
                                id='regPageSecondPassword'
                                errorText='Пароли не совпадают' }}}
                    </div>
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
