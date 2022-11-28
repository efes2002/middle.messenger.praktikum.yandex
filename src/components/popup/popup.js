import Block from "../../utils/block";

export class Popup extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            {{#if isOpen}}
                <div class="popup popup_opened">
                    <div class="popup__container">
                        {{#if isSimpleForm}} 
                            {{{ EditSimpleForm 
                                    title=title
                                    nameInput=nameInput
                                    name=name
                                    value=value
                                    editProfile=editProfile
                                    closePopup=closePopup
                                    nameInput=nameInput
                                    classNameError=classNameError
                                    errorText=errorText
                                    value=value}}}
                        {{/if}}
                        {{#if isPasswordForm}} 
                            {{{ EditPasswordForm
                                    name=name
                                    value=value
                                    closePopup=closePopup
                                    editPassword=editPassword
                                    classNameError=classNameError
                                    errorText=errorText
                            }}} 
                        {{/if}}
                        {{#if isAvatarForm}} 
                            {{{ EditAvatarForm
                                    nameInput=nameInput
                                    closePopup=closePopup
                                    editAvatar=editAvatar
                            }}} 
                        {{/if}}
                    </div>
                </div>
            {{else}}
                <div></div>
            {{/if}}
        `;
    }
}
