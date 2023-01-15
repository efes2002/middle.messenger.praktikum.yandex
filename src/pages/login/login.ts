// eslint-disable-next-line import/no-cycle
import Block, { Props, Children } from '../../utils/block';
// eslint-disable-next-line import/no-cycle
import { ACTION, dispatch } from '../../utils/dispatch';
// eslint-disable-next-line import/no-cycle
import authController from '../../controllers/AuthController';
import store from '../../utils/store';
// eslint-disable-next-line import/no-cycle

export default class Login extends Block {
  constructor(props: Props) {
    super({
      ...props,
      loginError: store.getState().loginError,
      submitForm: (_element: HTMLElement, _children: Children, event: Event) => {
        dispatch(ACTION.signin, { element: this, event });
      },
      logOut: () => {
        authController.logout();
      },
    });
  }

  render() {
    // language=hbs
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
                <div class="form__sign-box">{{loginError}}</div>
                {{{Button
                        className="form__button cursor-hover"
                        nameInput=nameInput
                        label='Войти'
                        onclick=submitForm
                        form="formUserLogin"}}}

                {{{Link
                        className="form__link cursor-hover"
                        link="/sign-up"
                        label="Нет аккаунта?"
                }}}
            </form>
        </section>
    `;
  }
}
