const reg: Record<string, RegExp> = {
  first_name: (/^[а-яА-ЯёЁa-zA-Z]+[а-яА-ЯёЁa-zA-Z]$/),
  second_name: (/^[а-яА-ЯёЁa-zA-Z]+[а-яА-ЯёЁa-zA-Z]$/),
  display_name: (/^[а-яА-ЯёЁa-zA-Z]+[а-яА-ЯёЁa-zA-Z]$/),
  login: (/^[a-zA-Z0-9_-]{3,20}$/),
  email: (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i),
  password: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,40}$/,
  // eslint-disable-next-line max-len
  passwordSecond: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,40}$/,
  phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
  message: /^\s*$/,
};

// eslint-disable-next-line import/prefer-default-export,max-len
export const validationInput = (typeInput: string, value: string): boolean => reg[typeInput].test(value);
