import testDataMain from "../pages/main/testDataMain";
import {validationInput} from "./validationInput";
import {PAGE_NAME} from "./listPageAndSetting";

export const ACTION = {
    closePopup: 'closePopup',
    isOpen: 'isOpen',
    submitForm: 'submitForm',
    validationOnBlur: 'validationOnBlur',
    validationOnFocus: 'validationOnFocus',
    editProfile: 'editProfile'
}

export const state = {
    users: {
        id: '',
        avatar: '',
        email: 'pochta@yandex.ru',
        login: 'Ivan1989',
        firstName: 'Иван',
        secondName: 'Иванов',
        displayName: 'Иванчик',
        phone: `+7(907)777-77-77`
    },
    isLogin: true,
    listChats: [],
    liveChatId: '',
    liveMessages: [],
    popupProfile: {
        isOpen: false,
        namePopupForm: {
            isSimpleForm: false,
            isPasswordForm: false,
            isAvatarForm: false
        },
        setting: {
            title: '',
            name: '',
            id: '',
            value: '',
            classNameError: '',
            errorText: ''
        }
    },
    messages: testDataMain.messages,
    chats: testDataMain.chats,
}

export const dispatch = (action, value) => {
    const { props = {}, element = {}, children = {}, event = {} } = value;
    switch (action) {

        case ACTION.closePopup: {
            exchangeOfStates({
                popupProfile: {...props.popupProfile, isOpen: false}
            }, [PAGE_NAME.profile])
            break;
        }

        case ACTION.isOpen: {
            exchangeOfStates({
                popupProfile: {
                    ...props.popupProfile,
                    isOpen: true,
                    namePopupForm: {
                        isSimpleForm: element.props.isSimpleForm,
                        isPasswordForm: element.props.isPasswordForm,
                        isAvatarForm: element.props.isAvatarForm,
                    },
                    setting: {
                        title : children.title,
                        name: children.name,
                        value: children.value,
                        id: children.id,
                        classNameError: children.classNameError,
                        errorText: children.errorText,
                    }
                }
            }, [PAGE_NAME.profile]);
            break;
        }

        case ACTION.submitForm: {
            event.preventDefault();
            const tempObj = {};
            Array.from(event.target.form.elements).forEach((item) => {
                if (item.nodeName === "INPUT") {
                    tempObj[item.name] = item.value;
                    item.value = '';
                }
              });
            event.target.form.querySelectorAll('.form__input-error').forEach((item)=>item.textContent='');
            const tempObj2 = {};
            Object.entries(tempObj).forEach(([key, value]) => {
                if (validationInput(key, value)&&(value !== '')) { tempObj2[key] = 'OK верное значение' }
                else {  tempObj2[key] = 'FALSE не верное значение' }
            })
            console.log(tempObj);
            console.log('Я еще раз проверил на валидность значений, вот результа: ', tempObj2);
            break;
        }

        case ACTION.validationOnBlur: {
            if (!validationInput(props.name, event.target.value)&&(event.target.value !== '')) {
                Array.from(event.target.parentElement.children).forEach((element) => {
                    if (element.className === props.classNameError) {
                        element.innerText = props.errorText;
                    }
                });
            }
            break;
        }

        case ACTION.validationOnFocus: {
            Array.from(event.target.parentElement.children).forEach((element) => {
                if (element.className === props.classNameError) {
                    element.innerText = '';
                }
            });
            break;
        }

        case ACTION.editProfile: {
            const value = event.target.form[0].value;
            const name = event.target.form[0].name;
            event.preventDefault();
            exchangeOfStates({
                users: {...props.users, [name]: value},
            }, [PAGE_NAME.main, PAGE_NAME.profile]);

            console.log('Я еще раз проверил на валидность значений, вот результа: ');
            if (validationInput(name, value)&&(value !== '')) { console.log({ name : 'OK верное значение' }); }
            else { console.log({ name : 'FALSE не верное значение'}); }
            break;
        }

        default:
            alert( "Нет таких значений" );
    }
}


