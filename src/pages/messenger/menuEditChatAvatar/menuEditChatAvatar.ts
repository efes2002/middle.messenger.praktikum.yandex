import Block, { Props } from '../../../utils/block';
import ChatsController from '../../../controllers/ChatsController';
import store from '../../../utils/store';

export default class MenuEditChatAvatar extends Block {
  constructor(props: Props) {
    super({
      ...props,
      actionButton: (event: Event) => {
        const ChatId: any = store.getState().selectedChatData.id;
        const target = event.target as HTMLButtonElement;
        const formElement = target.form as HTMLFormElement;
        const formData: FormData = new FormData(formElement);
        formData.append('chatId', ChatId);
        ChatsController.editAvatar(formData);
        this.props.menuEditChatAvatar.close();
      },
    });
  }

  render() {
    // language=hbs
    return `
        <form class="mini-form-avatar" id='formEditChatAvatar'
        >
            {{{LinkActive
                    className="mini-form-avatar__button-x"
                    link="/messenger"
                    label="x"
                    onclick=menuEditChatAvatar.close
            }}}
            <h1 class="mini-form-avatar__name">Изменить Аватар Чата</h1>
            <input
                    class="mini-form-avatar__link"
                    type="file"
                    name="avatar"
                    form="formEditChatAvatar"
                    id="input__file"/>
            {{{ButtonSimple
                    onclick=actionButton
                    className="mini-form-avatar__button"
                    form="formEditChatAvatar"
                    label="Изменить"
            }}}
        </form>
    `;
  }
}
