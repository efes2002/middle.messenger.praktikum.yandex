import Block from '../../utils/block.js';

export class TestButton extends Block {
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
