import Block from "../../../utils/block";

export class Chats extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => console.log(5)
        });
    }
    render() {
        //language=hbs
        return `
            <ul class="chats__list-users">
                {{#each chatsData}}
                    {{{Chat time=time name=name}}}
                {{/each}}
            </ul>
        `;
    }
}
