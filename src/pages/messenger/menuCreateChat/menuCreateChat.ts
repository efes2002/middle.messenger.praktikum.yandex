import Block, { Props } from '../../../utils/block';
import ChatsController from '../../../controllers/ChatsController';

export default class MenuCreateChat extends Block {
  constructor(props: Props) {
    super({
      ...props,
      actionButton: (value: string) => {
        ChatsController.create(value);
        this.props.menuCreateChat.close();
      },
    });
  }



  render() {
    // language=hbs
    return `
        {{{MiniForm
                actionButtonX=menuCreateChat.close
                actionButton=actionButton
                className="menu-create-chate"
                idForm="formCreateChat"
                title="Введите имя чата"
                buttonLabel="Создать"
        }}}
    `;
  }
}
