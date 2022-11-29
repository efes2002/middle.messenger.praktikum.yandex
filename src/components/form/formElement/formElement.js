import Block from "../../../utils/block";

export class FormElement extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <div class="form__field">
                <label class="form__input-title" id={{id}}>{{title}}</label>
                {{{InputValidation 
                        className='form__input' 
                        name=name 
                        form=form 
                        id=id
                        errorText=errorText
                        classNameError='form__input-error'
                        value=value}}}
                <div class="form__input-line"></div>
                <span class="form__input-error"></span>
            </div>
        `;
    }
}
