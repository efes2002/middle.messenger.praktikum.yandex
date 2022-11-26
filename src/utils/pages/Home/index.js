import Block from "../../block";
//import AuthController from "../../controllers/AuthController";

export default class Home extends Block {
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
                <h1>{{title}}</h1>
                {{{Button label="click 3" onClick=onLogout}}}
                {{{Button label="click 2"}}}
            </div>
        `;
    }
}

