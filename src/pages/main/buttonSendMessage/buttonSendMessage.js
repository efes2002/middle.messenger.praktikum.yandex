import Block from "../../../utils/block";

export class ButtonSendMessage extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                click: (event)=>{
                    props.onclick(this, props, event)
                }
            }
        });
    }
    render() {
        //language=hbs
        return `
             <button class="main__button-message-sent cursor-hover" src="static/img13.svg"></button>
        `;
    }
}
