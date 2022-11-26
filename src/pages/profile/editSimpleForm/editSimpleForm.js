import Block from "../../../utils/block";

export class EditSimpleForm extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <section class="form-box">
                <form class="form-simple__box" id="formSimple" onsubmit="renderPage('profile')">
                    <h1 class="popup__title">Редактирование логина</h1>
                    <div class="popup__form">
                        <label class="form-simple__label" id={{id}}>
                            <input class="form-simple__input" value="asfsaf"></input>
                        </label>
                    </div>
                    <div class="form-simple__box-button">
                        <button class="popup__button popup__button-not" onclick="renderPage('profile')">Отмена</button>
                        <button class="popup__button popup__button-yes" type="submit" form="formSimple">Применить</button>
                    </div>
                </form>
            </section>
        `;
    }
}