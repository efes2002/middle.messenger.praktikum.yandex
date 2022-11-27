import Block from "../../../utils/block";

export class InputMessage extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <input class="main__button-message-text"></input>
        `;
    }
}
