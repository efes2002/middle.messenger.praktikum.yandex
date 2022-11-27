import Block from "../../../utils/block";

export class ButtonSendMessage extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <div>
                <img class="main__button-message-file cursor-hover" type="button" src="static/img13.svg"></img>
            </div>
        `;
    }
}
