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
        <form class="mini-form {{className}}" id={{idForm}}
        >
            {{{LinkActive
                    className="mini-form__button-x"
                    link="/messenger"
                    label="x"
                    onclick=actionButtonX
            }}}
            <h1 class="mini-form__name">{{title}}</h1>
            <input
                    class="mini-form__input"
                    name="text"
                    form={{idForm}}
            />
            {{{ButtonSimple
                    onclick=onclickButton
                    className="mini-form__button"
                    form=idForm
                    label=buttonLabel
            }}}
        </form>
    `;
  }
}
