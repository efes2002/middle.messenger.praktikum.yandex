import store from '../../../utils/store';
import { BASE_URL_AVATAR } from '../../../utils/constants';
import Block, { Props } from '../../../utils/block';

export default class MessengerLeftTop extends Block {
  constructor(props: Props) {
    super({
      ...props,
      avatarUrl: `${BASE_URL_AVATAR}${store.getState().user.avatar}`,
    });
  }

  render() {
    // language=hbs
    return `
        <article class="main__left-top">
            <img class="chat__avatar-img" src={{avatarUrl}} alt="Это ваш Аватар"></img>
            <input class="main__list-search" value="Поиск"></input>
        </article>
        `;
  }
}
