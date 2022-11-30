import Block from '../../utils/block';

export default class Button extends Block {
  constructor(props: any) {
    super({
      ...props,
      events: {
        click: (event: any) => {
          props.onclick(this, props, event);
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <button class="{{className}}" type="button" form={{form}}>{{label}}</button>`;
  }
}
