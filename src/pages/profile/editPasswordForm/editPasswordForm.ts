import Block, { Props } from '../../../utils/block';

export default class EditPasswordForm extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            <section class="form-pass__box">
                <h1 class="popup__title">Редактирование пароля</h1>
                <form class="form-pass__form" id="formPass" onsubmit="renderPage('profile')">
                    <div class="form-pass__label">
                        <label class="form-pass__input-title">Старый пароль</label>
                        {{{InputValidation
                                className='form-pass__input'
                                name='password'
                                form="formPass"
                                id='oldPassword'
                                classNameError='form-pass__input-error'
                                errorText='Невалидный пароль'
                                value=''}}}
                        <span class="form-pass__input-error"/></span>
                    </div>
                    <div class="form-pass__label" >
                        <label class="form-pass__input-title">Новый пароль</label>
                        {{{InputValidation
                                className='form-pass__input'
                                name='password'
                                form="formPass"
                                id='newPassword'
                                classNameError='form-pass__input-error'
                                errorText='Невалидный пароль'
                                value=''}}}
                        <span class="form-pass__input-error"/></span>
                    </div>
                    <div class="form-pass__label">
                        <label class="form-pass__input-title">Повторите новый пароль</label>
                        {{{InputValidation
                                className='form-pass__input'
                                name='password'
                                form="formPass"
                                id='newPasswordSecond'
                                classNameError='form-pass__input-error'
                                errorText='Невалидный пароль'
                                value=''}}}
                        <span class="form-pass__input-error"/></span>
                    </div>
                    <span class="form-pass__input-two-password-error"/></span>
                    <div class="form-pass__box-button">
                        {{{Button
                                className="popup__button popup__button-not"
                                nameInput=nameInput
                                label="Отмена"
                                onclick=closePopup
                                form="formPass"}}}
                        {{{Button
                                className="popup__button popup__button-yes"
                                nameInput=nameInput
                                label="Применить"
                                onclick=editPassword
                                form="formPass"}}}
                    </div>
                </form>
            </section>
        `;
  }
}
