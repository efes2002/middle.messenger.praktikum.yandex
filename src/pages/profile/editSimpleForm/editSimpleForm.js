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
                <form class="form-simple__box" id="formSimple">
                    <h1 class="popup__title">Редактирование - {{setting.title}}</h1>
                    {{{InputValidation
                            className='form-simple__input'
                            name=setting.name
                            form="formSimple"
                            id=setting.id
                            errorText=setting.errorText
                            classNameError=setting.classNameError
                            value=setting.value
                    }}}
                    <span class="form__input-error"></span>
                    <div class="form-simple__box-button">
                        {{{Button
                                className="popup__button popup__button-not"
                                label="Отмена"
                                onclick=closePopup
                                form="formSimple"}}}
                        {{{Button 
                                className="popup__button popup__button-yes" 
                                label="Применить" 
                                onclick=editProfile 
                                form="formSimple"}}}
                    </div>
                </form>
            </section>
            
        `;
    }
}
