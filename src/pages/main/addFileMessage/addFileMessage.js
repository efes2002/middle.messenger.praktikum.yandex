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
            <img class="main__button-message-file cursor-hover" src="static/img14.svg"/>
        `;
    }
}
