import Block from "../../../utils/block";

export class EditSimpleForm extends Block {
    constructor(props) {
        super({
            ...props
        });
    }
    render() {
        //language=hbs
        return `
            <section class="form-box">
                <form class="form-simple__box" id="formSimple">
                    <h1 class="popup__title">Редактирование - {{title}}</h1>
                    <div class="popup__form">
                        <label class="form-simple__label">
                            <input class="form-simple__input" value={{value}}></input>
                        </label>
                    </div>
                    <div class="form-simple__box-button">
                        {{{Button
                                className="popup__button popup__button-not"
                                nameInput=nameInput
                                label="Отмена"
                                onclick=closePopup
                                form="formSimple"}}}
                        {{{Button 
                                className="popup__button popup__button-yes" 
                                nameInput=nameInput 
                                label="Применить" 
                                onclick=editProfile 
                                form="formSimple"}}}
                    </div>
                </form>
            </section>
        `;
    }
}
