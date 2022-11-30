import Block from '../../../utils/block';

export default class InputProfile extends Block {
  constructor(props: any) {
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
            <li class="input-profile__item cursor-hover_green">
                <h2 class="input-profile__item-title">{{title}}</h2>
                <div class="input-profile__item-value" name={{name}}>{{value}}</div>
            </li>
        `;
  }
}
