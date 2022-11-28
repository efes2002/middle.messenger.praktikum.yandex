import Block from "../../../utils/block";

export class AddFileMessage extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <button class="main__button-message-file cursor-hover"></button>
        `;
    }
}
