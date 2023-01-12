import Block, { Props } from '../../../utils/block';
import { BASE_URL_AVATAR } from '../../../utils/constants';

export default class AvatarProfile extends Block {
  constructor(props: Props) {
    super({
      ...props,
      avatarUrl: `${BASE_URL_AVATAR}${props.avatar}`,
      events: {
        click: () => {
          props.isOpen(this, props);
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
            <img alt="avatarka" class="profile__avatar cursor-hover" src={{avatarUrl}}></img>
        `;
  }
}
