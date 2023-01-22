import Block, { Props } from '../../../../utils/block';
import store from '../../../../utils/store';

function funIsAuthor(userId: number, authorId: number) {
  if ((userId) && (authorId)) { return userId === authorId; }
  return false;
}

export default class Message extends Block {
  constructor(props: Props) {
    super({
      ...props,
      isAuthor: funIsAuthor(store.getState().user.id, props.user_id),
    });
  }

  render() {
    // language=hbs
    return `
            <div class="message__box {{#if isAuthor}}message-box-author{{/if}}">
                <div class="message {{#if isAuthor}}message-author{{/if}}
                    {{#if img}}message-img{{/if}}">
                    {{#if img}}
                        <img class="message__img" src="{{url}}" alt="Картинка в чате"/>
                    {{else}}
                        <div class="message__text">{{text}}</div>
                    {{/if}}
                    <div class="message__item">
                        <div class="message__time">{{time}}</div>
                        <img class="message__status" 
                             src="static/messageStatus_{{#if is_read}}2{{else}}3{{/if}}.png" 
                             alt="Символ статуса отправки сообщения" />
                    </div>
                </div>
            </div>
        `;
  }
}
