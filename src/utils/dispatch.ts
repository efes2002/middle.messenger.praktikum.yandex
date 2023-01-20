// eslint-disable-next-line import/no-named-as-default
import UserController from '../controllers/UserController';
import { validationInput } from './validationInput';
// eslint-disable-next-line import/no-cycle
import store from './store';
// eslint-disable-next-line import/no-named-as-default,import/no-cycle
import AuthController from '../controllers/AuthController';
import { SignupData, SigninData } from '../api/AuthAPI';
import { PasswordData, ProfileData } from '../api/UserAPI';

export const ACTION: Record<any, string> = {
  submitForm: 'submitForm',
  validationOnBlur: 'validationOnBlur',
  validationOnFocus: 'validationOnFocus',
  editProfile: 'editProfile',
  editAvatar: 'editAvatar',
  editPassword: 'editPassword',
  signin: 'signin',
  signup: 'signup',
};

function submitHandling(event: any):any {
  const tempObj: Record<string, any> = {};
  const tempObj2: Record<string, boolean> = {};

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
      tempObj2[key] = true;
    } else { tempObj2[key] = false; }
  });
  return { tempObj, tempObj2 };
}

export const dispatch = (action: string, value: any, closePopup?: any) => {
  const {
    props = {}, event = {},
  } = value;

  switch (action) {
    case ACTION.signin: {
      event.preventDefault();
      let notErrorInput = true;
      const { tempObj, tempObj2 } = submitHandling(event);
      // eslint-disable-next-line @typescript-eslint/no-shadow
      Object.entries(tempObj2).forEach((value) => {
        if (!value[1]) { notErrorInput = false; }
      });
      const dataValue: SigninData = {
        login: tempObj.login,
        password: tempObj.password,
      };
      if (notErrorInput) {
        AuthController.signin(dataValue);
        store.set('loginError', '');
      } else {
        store.set('loginError', 'Ошибка в заполнение');
      }
      break;
    }

    case ACTION.signup: {
      let notErrorInput = true;
      const { tempObj, tempObj2 } = submitHandling(event);
      const dataValue: SignupData = {
        first_name: tempObj.first_name,
        second_name: tempObj.second_name,
        login: tempObj.login,
        email: tempObj.email,
        password: tempObj.password,
        phone: tempObj.phone,
      };
      // eslint-disable-next-line @typescript-eslint/no-shadow
      Object.entries(tempObj2).forEach((value) => {
        if (!value[1]) { notErrorInput = false; }
      });
      if (notErrorInput) {
        AuthController.signup(dataValue);
        store.set('regError', '');
      } else {
        store.set('regError', 'Ошибка в заполнение');
      }
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
      const { value, name } = event.target.form[0];

      console.log(77, value, name);
      const userData = store.getState().user;
      const dataValue: ProfileData = {
        first_name: store.getState().user.first_name || '',
        second_name: store.getState().user.second_name || '',
        display_name: store.getState().user.display_name || '',
        login: userData.login || '',
        email: userData.email || '',
        phone: userData.phone || '',
      };
      if (validationInput(name, value) && (value !== '')) {
        UserController.editProfile({ ...dataValue, [name]: value });
        closePopup();
      } else {
        // eslint-disable-next-line no-console
        console.log({ name: 'FALSE не верное значение' });
      }
      break;
    }

    case ACTION.editAvatar: {
      event.preventDefault();
      const formData: FormData = new FormData(event.target.form);
      UserController.editAvatar(formData);
      break;
    }

    case ACTION.editPassword: {
      event.preventDefault();
      const oldPassword = event.target.form[0].value;
      const newPassword = event.target.form[1].value;
      const newPasswordSecond = event.target.form[2].value;
      const elementErrorTwoPas = event.target.form.children[3];
      if ((oldPassword === '') || (newPassword === '') || (newPasswordSecond === '')) {
        store.set('profilePasError', 'Ошибка в заполнение');
      } else if ((validationInput('password', oldPassword))
          && (validationInput('password', newPassword))
          && (validationInput('password', newPasswordSecond))) {
        if (newPassword !== newPasswordSecond) {
          elementErrorTwoPas.textContent = 'Вы ввели неправильный повторный пароль';
        } else {
          const dataValue: PasswordData = {
            oldPassword,
            newPassword,
          };
          UserController.editPassword(dataValue)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then(() => {
              closePopup();
            })
            .catch(() => {
              store.set('profilePasError', 'Неверный пароль');
            });
        }
      }
      break;
    }
    default:
  }
};
