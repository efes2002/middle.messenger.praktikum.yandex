import Block, { Props } from '../../../../utils/block';

export default class Message extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            <div class="message__box {{#if author}}message-box-author{{/if}}">
                <div class="message {{#if author}}message-author{{/if}}
                    {{#if img}}message-img{{/if}}">
                    {{#if img}}
                        <img class="message__img" src="{{url}}" alt="Картинка в чате"/>
                    {{else}}
                        <div class="message__text">{{text}}, {{isOpenPopup}}</div>
                    {{/if}}
                    <div class="message__item">
                        <div class="message__time">{{time}}</div>
                        <img class="message__status" src="static/messageStatus_3.png" 
                             alt="Символ статуса отправки сообщения"/>
                    </div>
                </div>
            </div>
        `;
  }
}
