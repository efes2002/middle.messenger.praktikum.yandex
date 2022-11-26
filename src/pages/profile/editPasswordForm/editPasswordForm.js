import Block from "../../../utils/block";

export class EditPasswordForm extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <section class="form-pass__box">
                <h1 class="popup__title">Редактирование пароля</h1>
                <form class="form-pass__form" id="formPass" onsubmit="renderPage('profile')">
                    <label class="form-pass__label">
                        <h2 class="form-pass__input-title">Старый пароль</h2>
                        <input class="form-pass__input" value="•••••••••••" name="oldPassword"></input>
                        <span class="form-pass__input-error"/>Неправильный пароль</span>
                    </label>
                    <label class="form-pass__label" >
                        <h2 class="form-pass__input-title">Новый пароль</h2>
                        <input class="form-pass__input" value="•••••••••••" name="newPassword"></input>
                        <span class="form-pass__input-error"/>Неверный формат</span>
                    </label>
                    <label class="form-pass__label">
                        <h2 class="form-pass__input-title">Повторите новый пароль</h2>
                        <input class="form-pass__input" value=•••••••••••" name="newPasswordSecond"></input>
                        <span class="form-pass__input-error"/>Ошибка при повторном вводе</span>
                    </label>
                    <div class="form-pass__box-button">
                        <button class="popup__button popup__button-not" onclick="renderPage('profile')">Отмена</button>
                        <button class="popup__button popup__button-yes" type="submit" form="formPass">Применить</button>
                    </div>
                </form>
            </section>
        `;
    }
}
