// eslint-disable-next-line import/no-cycle
import { ACTION, dispatch } from '../../../utils/dispatch';
import Block, { Children, Props } from '../../../utils/block';

export default class MessengerRightBottom extends Block {
  constructor(props: Props) {
    super({
      ...props,
      submitForm: (_element: HTMLElement, _children: Children, event: Event) => {
        dispatch(ACTION.submitForm, { event });
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
