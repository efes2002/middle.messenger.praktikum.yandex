import Block, { Props } from '../../utils/block';

export default class MiniForm extends Block {
  constructor(props: Props) {
    super({
      ...props,
      onclickButton: (event: Event) => {
        const target = event.target as HTMLButtonElement;
        const formElement = target.form as HTMLFormElement;
        const inputValue: string = (formElement[0] as HTMLInputElement).value;
        props.actionButton(inputValue);
      },
    });
  }

  render() {
    // language=hbs
    return `
        <form class="main__popup-chat-create" id={{idForm}}
        >
            {{{LinkActive
                    className="main__popup-chat-create-x"
                    link="/messenger"
                    label="x"
                    onclick=actionButtonX
            }}}
            <h1 class="main__popup-chat-create-name">{{title}}</h1>
            <input
                    class="main__popup-chat-create-input"
                    name="text"
                    form="formCreateChat"
            />
            {{{ButtonSimple
                    onclick=onclickButton
                    className="main__popup-chat-create-button"
                    form="formCreateChat"
                    label=buttonLabel
            }}}
        </form>
    `;
  }
}
