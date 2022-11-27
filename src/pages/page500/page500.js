import Block from "../../utils/block";

export class Page500 extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            {{{ErrorPage title=title subtitle=subtitle linktitle=linktitle}}}
        `;
    }
}
