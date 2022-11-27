import Block from "../../../utils/block";

export class AvatarProfile extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                click: ()=>{
                    props.isOpen(this, props);
                }
            }
        });
    }

    render() {
        //language=hbs
        return `
            <img class="profile__avatar cursor-hover" src="static/Avatarka.webp"/>
        `;
    }
}
