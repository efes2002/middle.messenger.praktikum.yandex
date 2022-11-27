import Block from "../../utils/block";

export class Button extends Block {
    constructor(props) {
        super({
            ...props,
            valueInputTmp: '',
            events: {
                click: (event)=>{
                    props.onclick(this, props, event)
                }
            }
        });
    }

    render() {
        //language=hbs
        return `
            <button class="{{className}}" type="button" form={{form}}>{{label}}</button>
        `;
    }
}
