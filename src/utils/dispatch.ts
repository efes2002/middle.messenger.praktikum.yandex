import { validationInput } from './validationInput';
// eslint-disable-next-line import/no-cycle
import store from './store';

export const ACTION: Record<any, string> = {
  closePopup: 'closePopup',
  isOpen: 'isOpen',
  submitForm: 'submitForm',
  validationOnBlur: 'validationOnBlur',
  validationOnFocus: 'validationOnFocus',
  editProfile: 'editProfile',
};

export const dispatch = (action: string, value: any): void => {
  const {
    props = {}, element = {}, children = {}, event = {},
  } = value;

  switch (action) {
    case ACTION.closePopup: {
      store.set('popupProfile', { ...store.getState().popupProfile, isOpen: false });
      break;
    }

    case ACTION.isOpen: {
      store.set('popupProfile', {
        isOpen: true,
        namePopupForm: {
          isSimpleForm: element.props.isSimpleForm,
          isPasswordForm: element.props.isPasswordForm,
          isAvatarForm: element.props.isAvatarForm,
        },
        setting: {
          title: children.title,
          name: children.name,
          value: children.value,
          id: children.id,
          classNameError: children.classNameError,
          errorText: children.errorText,
        },
      });
      break;
    }

    case ACTION.submitForm: {
      event.preventDefault();
      const tempObj: Record<string, any> = {};
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

      const tempObj2: Record<string, any> = {};

      // eslint-disable-next-line @typescript-eslint/no-shadow
      Object.entries(tempObj).forEach(([key, value]: [string, any]) => {
        if (validationInput(key, value) && (value !== '')) {
          tempObj2[key] = 'OK верное значение';
        } else { tempObj2[key] = 'FALSE не верное значение'; }
      });
      // eslint-disable-next-line no-console
      console.log(tempObj);
      // eslint-disable-next-line no-console
      console.log('Я еще раз проверил на валидность значений, вот результа: ', tempObj2);
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
      store.set('user', { ...store.getState().user, [name]: value });
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
