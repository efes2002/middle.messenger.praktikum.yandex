import Block, { Props } from '../../../../utils/block';

export default class Chat extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            <li class="chat__users-box">
                <div class="chat__users-avatar">
                    <div class="chat__avatar-img"></div>
                </div>
                <div class="chat__list-user">
                    <div class="chat__users-time">{{time}}</div>
                    <div class="chat__users-title">{{name}}</div>
                </div>
            </li>
        `;
  }
}
