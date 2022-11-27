import Block from "../../../utils/block";

export class Messages extends Block {
    constructor(props) {
        super({
            ...props,
            onLogout: () => console.log(5)
        });
    }
    render() {
        //language=hbs
        return `
            <section class="messages">
                {{#each messagesData}}
                    {{{Message 
                            time=time 
                            text=text 
                            author=author
                            img=img 
                            url=url 
                            status=status
                            isOpenPopup=../isOpenPopup
                    }}}
                {{/each}}
            </section>
        `;
    }
}
