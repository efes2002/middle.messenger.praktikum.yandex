import Block, { Props } from '../../../utils/block';

export default class AvatarProfile extends Block {
  constructor(props: Props) {
    super({
      ...props,
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
            <img class="profile__avatar cursor-hover" src="static/Avatarka.webp"/>
        `;
  }
}
