import Block from '../../block.js';

import template from './button.hbs';

export class Button extends Block {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(template, { label: this.props.label });
    }
}
