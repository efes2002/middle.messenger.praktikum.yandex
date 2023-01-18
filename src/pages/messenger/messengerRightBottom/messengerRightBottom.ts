// eslint-disable-next-line import/no-cycle
import Block, { Props } from '../../../utils/block';
import store from '../../../utils/store';
import MessagesController from '../../../controllers/MessagesController';

export default class MessengerRightBottom extends Block {
  constructor(props: Props) {
    super({
      ...props,
      isSelectId: store.getState().selectedChatId,
      submitForm: (event: Event) => {
        const target = event.target as HTMLButtonElement;
        const formElement = target.form as HTMLFormElement;
        const inputElement = formElement[0] as HTMLInputElement;
        const inputValue: string = inputElement.value;
        if (inputValue !== '') {
          MessagesController.sendMessage(this.props.isSelectId, inputValue);
        }
        inputElement.value = '';
      },
    });
  }

  render() {
    // language=hbs
    return `
        <form class="main__right-bottom" id="formMessage">
            {{{InputMessage form="formMessage" name="message"}}}
            {{{ButtonSendMessage onclick=submitForm form="formMessage"}}}
        </form>
        `;
  }
}
