import Block from "../../../../utils/block";

export class Message extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }
    render() {
        //language=hbs
        return `
            <div class="message__box {{#if author}}message-box-author{{/if}}">
                <div class="message {{#if author}}message-author{{/if}} {{#if img}}message-img{{/if}}">
                    {{#if img}}
                        <img class="message__img" src="{{url}}"/>
                    {{else}}
                        <div class="message__text">{{text}}, {{isOpenPopup}}</div>
                    {{/if}}
                    <div class="message__item">
                        <div class="message__time">{{time}}</div>
                        <img class="message__status" src="static/messageStatus_3.png"/>
                    </div>
                </div>
            </div>
        `;
    }
}

/*
{{#if img}}
                <div class="message__box {{#if author}}message-box-author{{/if}}">
                    <div class="message-img {{#if author}}message-author{{/if}}">
                        <img class="message__img" src="{{url}}"/>
                        <div class="message__item">
                            <div class="message__time">{{time}}</div>
                            <img class="message__status" src="static/messageStatus_3.png"/>
                        </div>
                    </div>
                </div>
            {{else}}
                <div class="message__box {{#if author}}message-box-author{{/if}}">
                    <div class="message {{#if author}}message-author{{/if}}">


                        {{#if img}}
                            <div class="message__text">{{text}}</div>
                        {{else}}
                            <img class="message__status" src="static/messageStatus_3.png"/>
                        {{/if}}

                        <div class="message__item">
                            <div class="message__time">{{time}}</div>
                            <img class="message__status" src="static/messageStatus_3.png"/>
                        </div>
                    </div>
                </div>
            {{/if}}

 */
