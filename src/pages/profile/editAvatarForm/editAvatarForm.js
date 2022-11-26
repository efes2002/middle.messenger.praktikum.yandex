import Block from "../../../utils/block";

export class EditAvatarForm extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <section class="form-avatar">
                <form class="form-avatar__box" id="formAvatar" onsubmit="renderPage('profile')">
                    <h1 class="popup__title">Редактирование Аватара</h1>
                    <input
                            class="form-avatar__link"
                            type="file"
                            name="avatar"
                            id="input__file">Выбрать файл на компьютере</input>
                    <div class="form-avatar__box-button">
                        <button class="popup__button popup__button-not" onclick="renderPage('profile')">Отмена</button>
                        <button class="popup__button popup__button-yes" type="submit" form="formAvatar">Сохранить</button>
                    </div>
                </form>
            </section>
        `;
    }
}
