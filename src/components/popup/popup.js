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
            {{#if isPopup}}
                <div class="popup popup_opened">
                    <div class="popup__container">
                        {{#if isSimpleForm}} {{{ EditSimpleForm }}} {{/if}}
                        {{#if isPasswordForm}} {{{ EditPasswordForm }}} {{/if}}
                        {{#if isAvatarForm}} {{{ EditAvatarForm }}} {{/if}}
                    </div>
                </div>
            {{/if}}
        `;
    }
}
