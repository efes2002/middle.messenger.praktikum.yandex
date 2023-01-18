import Block, { Props } from '../../utils/block';
// eslint-disable-next-line import/no-cycle
import { ACTION, dispatch } from '../../utils/dispatch';

export default class InputValidation extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        blur: (event: Event) => {
          dispatch(ACTION.validationOnBlur, { element: this, props: this.props, event });
        },
        focus: (event: Event) => {
          dispatch(ACTION.validationOnFocus, { element: this, props: this.props, event });
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
        <input
           class={{className}}
           name={{name}}
           form={{form}}
           id={{id}}
           value={{value}}></input>
        `;
  }
}
