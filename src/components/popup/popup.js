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
                                    value=value
                                    editProfile=editProfile
                                    closePopup=closePopup
                                    nameInput=nameInput 
                                    value=value}}}
                        {{/if}}
                        {{#if isPasswordForm}} 
                            {{{ EditPasswordForm
                                    closePopup=closePopup
                                    editPassword=editPassword
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
