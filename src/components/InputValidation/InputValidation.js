import Block from "../../utils/block";
import {ACTION, dispatch} from "../../utils/state";

export class InputValidation extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                blur: (event) => {
                    dispatch(ACTION.validationOnBlur, { props: this.props, event: event });
                },
                focus: (event) => {
                    dispatch(ACTION.validationOnFocus, { props: this.props, event: event });
                },
            }
        });
    }
    render() {
        //language=hbs
        return `
            <input class={{className}} name={{name}} form={{form}} id={{id}} value={{value}}></input>
        `;
    }
}
