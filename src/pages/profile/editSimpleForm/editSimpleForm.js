import Block from "../../../utils/block";

export class EditSimpleForm extends Block {
    constructor(props) {
        super({
            ...props,
            a: console.log('EditSimpleForm', props)
        });
    }
    render() {
        //language=hbs
        return `
            <section class="form-box">o
                <form class="form-simple__box" id="formSimple">
                    <h1 class="popup__title">Редактирование - {{title}}</h1>
                    <div class="popup__form">
                        {{{InputValidation
                                className='form-simple__input'
                                name=name
                                form=form
                                id=id
                                errorText=errorText
                                classNameError='form__input-error'
                                value=value}}}
                        <span class="form__input-error"></span>
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
