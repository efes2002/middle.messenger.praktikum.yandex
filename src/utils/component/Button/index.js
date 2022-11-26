import Block from '../../block.js';

export default class Button extends Block {
    constructor({ label, onClick }) {
        super({
            label,
            events: {
                click: onClick
            }
        });
    }
    render() {
        //language=hbs
        return `
            <button>
                {{label}}
            </button>
        `;
    }
}
