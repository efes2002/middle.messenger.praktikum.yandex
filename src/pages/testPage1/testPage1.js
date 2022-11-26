import Block from "../../utils/block";
//import AuthController from "../../controllers/AuthController";

export class TestPage1 extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => console.log(5)
        });
    }
    render() {
        //language=hbs
        return `
            <div>
                <h1>TestPage1</h1>
                {{{TestButton label="click 3" onClick=onLogout}}}
                {{{TestButton label="click 2"}}}
                <a class="chats__link-exit cursor-hover" onclick="renderPage('testMain')">testMain</a>
                <a class="chats__link-exit cursor-hover" onclick="renderPage('testPage1')">testPage1</a>
                <a class="chats__link-exit cursor-hover" onclick="renderPage('testPage2')">testPage2</a>
            </div>
        `;
    }
}
