import Block from '../../utils/block';

export default class Popup extends Block {
  constructor(props: any) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
                <div class="popup popup_opened">
                    <div class="popup__container">
                        {{#if namePopupForm.isSimpleForm}} 
                            {{{ EditSimpleForm
                                    setting=setting
                                    editProfile=editProfile
                                    closePopup=closePopup
                            }}}
                        {{/if}}
                        {{#if namePopupForm.isPasswordForm}} 
                            {{{ EditPasswordForm
                                    name=setting.name
                                    classNameError=setting.classNameError
                                    errorText=setting.errorText
                                    closePopup=closePopup
                                    editPassword=editPassword
                                    value=''
                            }}} 
                        {{/if}}
                        {{#if namePopupForm.isAvatarForm}} 
                            {{{ EditAvatarForm
                                    name=setting.name
                                    closePopup=closePopup
                                    editAvatar=editAvatar
                            }}} 
                        {{/if}}
                    </div>
                </div>
        `;
  }
}
