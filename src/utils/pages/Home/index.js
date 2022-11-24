import Block from "../../block";
import template from "./home.hbs";

export class Home extends Block {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(template, {children: this.children});
    }
}

