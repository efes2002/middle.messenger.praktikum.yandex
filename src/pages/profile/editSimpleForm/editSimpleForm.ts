import Block, { Props } from '../../../utils/block';

export default class EditSimpleForm extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          props.editProfile(this, props, event);
        },
      },
    });
  }

  render() {
    // language=hbs
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
                    {{{ButtonCancel
                            className="popup__button popup__button-not"
                            label="Отмена"
                            onclick=closePopup
                    }}}
                    <input 
                            class="popup__button popup__button-yes" 
                            type="submit" 
                            value="Применить"/>    
                </div>
            </form>
        </section>
    `;
  }
}
