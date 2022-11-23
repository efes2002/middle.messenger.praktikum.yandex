import Block from '../../block.js';

import template from './button.hbs';

export class Button extends Block {
    constructor(props) {
        super('button', props);
    }
    render() {
        return template({label: this.props.label});
    }
}
