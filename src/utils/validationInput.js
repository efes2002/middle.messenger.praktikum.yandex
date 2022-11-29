const reg = {
    'first_name': new RegExp(/^[а-яА-ЯёЁa-zA-Z]+[а-яА-ЯёЁa-zA-Z]$/),
    'second_name': new RegExp(/^[а-яА-ЯёЁa-zA-Z]+[а-яА-ЯёЁa-zA-Z]$/),
    'display_name': new RegExp(/^[а-яА-ЯёЁa-zA-Z]+[а-яА-ЯёЁa-zA-Z]$/),
    'login': new RegExp(/^[a-zA-Z0-9_-]{3,20}$/),
    'email': new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i),
    'password': new RegExp(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,40}$/),
    'passwordSecond': new RegExp(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,40}$/),
    'phone': new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/),
    'message': new RegExp(/^\s*$/),
}

export const validationInput = (typeInput, value)=> {
    return reg[typeInput].test(value);
}
