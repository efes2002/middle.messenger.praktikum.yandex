import { validationInput } from './validationInput';
// eslint-disable-next-line import/no-cycle
import store from './store';
// eslint-disable-next-line import/no-cycle
import authController, {} from '../controllers/AuthController';
import { SignupData, SigninData } from '../api/AuthAPI';

export const ACTION: Record<any, string> = {
  submitForm: 'submitForm',
  validationOnBlur: 'validationOnBlur',
  validationOnFocus: 'validationOnFocus',
  editProfile: 'editProfile',
  signin: 'signin',
  signup: 'signup',
};

function submitHandling(event: any):any {
  const tempObj: Record<string, any> = {};
  const tempObj2: Record<string, any> = {};

  Array.from(event.target.form.elements).forEach((item: any) => {
    if (item.nodeName === 'INPUT') {
      tempObj[item.name] = item.value;
      // eslint-disable-next-line no-param-reassign
      item.value = '';
    }
  });

  event.target.form.querySelectorAll('.form__input-error')
    // eslint-disable-next-line no-param-reassign,no-return-assign
    .forEach((item: any):string => item.textContent = '');

  Object.entries(tempObj).forEach(([key, value]: [string, any]) => {
    if (validationInput(key, value) && (value !== '')) {
      tempObj2[key] = 'OK верное значение';
    } else { tempObj2[key] = 'FALSE не верное значение'; }
  });
  // eslint-disable-next-line no-console
  //console.log(7, tempObj);
  // eslint-disable-next-line no-console
  //console.log('Я еще раз проверил на валидность значений, вот результа: ', tempObj2);
  return tempObj;
}

export const dispatch = (action: string, value: any) => {
  const {
    props = {}, event = {},
  } = value;

  switch (action) {
    case ACTION.signin: {
      event.preventDefault();
      const tempObj = submitHandling(event);
      const dataValue: SigninData = {
        login: tempObj.login,
        password: tempObj.password,
      };
      authController.signin(dataValue);
      break;
    }

    case ACTION.signup: {
      event.preventDefault();
      const tempObj = submitHandling(event);
      const dataValue: SignupData = {
        first_name: tempObj.first_name,
        second_name: tempObj.second_name,
        login: tempObj.login,
        email: tempObj.email,
        password: tempObj.password,
        phone: tempObj.phone,
      };
      authController.signup(dataValue);
      break;
    }

    case ACTION.validationOnBlur: {
      if (!validationInput(props.name, event.target.value) && (event.target.value !== '')) {
        Array.from(event.target.parentElement.children).forEach((elem: any) => {
          if (elem.className === props.classNameError) {
            // eslint-disable-next-line no-param-reassign
            elem.innerText = props.errorText;
          }
        });
      } else if (event.target.value === '') {
        Array.from(event.target.parentElement.children).forEach((elem: any) => {
          if (elem.className === props.classNameError) {
            // eslint-disable-next-line no-param-reassign
            elem.innerText = 'Поле обязательное для заполнения';
          }
        });
      }
      break;
    }

    case ACTION.validationOnFocus: {
      Array.from(event.target.parentElement.children).forEach((elem: any) => {
        if (elem.className === props.classNameError) {
          // eslint-disable-next-line no-param-reassign
          elem.innerText = '';
        }
      });
      break;
    }

    case ACTION.editProfile: {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { value } = event.target.form[0];
      const { name } = event.target.form[0];
      event.preventDefault();
      store.set(`user.${name}`, value);
      // eslint-disable-next-line no-console
      console.log('Я еще раз проверил на валидность значений, вот результа: ');
      if (validationInput(name, value) && (value !== '')) {
        // eslint-disable-next-line no-console
        console.log({ name: 'OK верное значение' });
      } else {
        // eslint-disable-next-line no-console
        console.log({ name: 'FALSE не верное значение' });
      }
      break;
    }

    default:
  }
};
