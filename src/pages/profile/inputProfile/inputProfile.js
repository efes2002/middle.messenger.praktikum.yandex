import Block from "../../../utils/block";

export class InputProfile extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                click: ()=>{
                    props.isOpen();
                }
            }
        });
    }
    render() {
        //language=hbs
        return `
            <li class="input-profile__item cursor-hover_green" id={{id}}>
                <h2 class="input-profile__item-title">{{title}}</h2>
                <div class="input-profile__item-value" name={{name}}>{{value}}</div>
            </li>
        `;
    }
}
