import Block from "../../utils/block";

export class Login extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            {{{StartForm
                    items=items
                    title=title
                    button=button
                    link=link
                    errorBox=errorBox
                    isLogin=true
                    isRegis=false
            }}}
        `;
    }
}
