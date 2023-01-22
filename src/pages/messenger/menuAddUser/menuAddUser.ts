import Block, { Props } from '../../../utils/block';
import ChatsController from '../../../controllers/ChatsController';
import store from '../../../utils/store';

export default class MenuAddUser extends Block {
  constructor(props: Props) {
    super({
      ...props,
      actionButton: (value: string) => {
        const ChatId: number = store.getState().selectedChatData.id;
        const UserId: number = Number(value);
        ChatsController.addUserToChat(ChatId, UserId);
        this.props.menuAddUser.close();
      },
    });
  }

  render() {
    // language=hbs
    return `
        {{{MiniForm
                actionButtonX=menuAddUser.close
                actionButton=actionButton
                className="menu-add-user"
                idForm="formAddUser"
                title="Введите ID пользователя"
                buttonLabel="Присоединить"
        }}}
    `;
  }
}
