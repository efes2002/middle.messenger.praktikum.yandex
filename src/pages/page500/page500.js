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
            {{{ErrorPage title="500" subtitle="Мы уже фиксим" linktitle="Назад к чатам"}}}
        `;
    }
}
