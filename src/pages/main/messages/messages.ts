import Block from '../../../utils/block';

export default class Messages extends Block {
  constructor(props: any) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
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
