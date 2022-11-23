import Block from "../../block";
import template from "./home.hbs";

import { Button } from '../../component/Button';

export class Home extends Block {
    constructor() {
        super('div');
    }
    render() {
        const button = new Button({ label : "Click me", })
        return template({ button: button.getContent().outerHTML })
    }
}
