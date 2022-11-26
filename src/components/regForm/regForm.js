import Block from "../../utils/block";

export class RegForm extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <div>privet {{data4}}</div>
        `;
    }
}
