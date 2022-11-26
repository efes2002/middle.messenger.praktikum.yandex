import Block from "../../../../utils/block";

export class Chat extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => console.log(5)
        });
    }
    render() {
        //language=hbs
        return `
            <li class="chat__users-box">
                <div class="chat__users-avatar">
                    <div class="chat__avatar-img"></div>
                </div>
                <div class="chat__list-user">
                    <div class="chat__users-time">{{time}}</div>
                    <div class="chat__users-title">{{name}}</div>
                </div>
            </li>
        `;
    }
}
