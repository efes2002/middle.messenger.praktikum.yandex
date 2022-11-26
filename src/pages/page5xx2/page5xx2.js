import Block from "../../utils/block";

export class Page5xx2 extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => console.log(5)
        });
    }
    render() {
        //language=hbs
        return `
            {{{ErrorPage2 title=title subtitle=subtitle linktitle=linktitle}}}
        `;
    }
}
