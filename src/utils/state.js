import testDataMain from "../pages/main/testDataMain";
import {validationInput} from "./validationInput";

export const ACTION = {
    closePopup: 'closePopup',
    isOpen: 'isOpen',
    submitForm: 'submitForm',
    validationOnBlur: 'validationOnBlur',
    validationOnFocus: 'validationOnFocus',
    editProfile: 'editProfile'
}

export const state =  {
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
    listChats : [],
    liveChatId : '',
    liveMessages: [],
    popupProfile: {
        isOpen: false,
        name: {
        isSimpleForm: true,
        isPasswordForm: false,
        isAvatarForm: false
        },
        setting: {
            title: '',
            name: '',
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
            })
            break;
        }

        case ACTION.isOpen: {
            const tmpSet  = !props.popupProfile.isOpen;
            exchangeOfStates({
                popupProfile: {
                    ...props.popupProfile,
                    isOpen: tmpSet,
                    name: {
                        isSimpleForm: element.props.isSimpleForm,
                        isPasswordForm: element.props.isPasswordForm,
                        isAvatarForm: element.props.isAvatarForm,
                    },
                    setting: {
                        title : children.title,
                        name: children.name,
                        value: children.value,
                        classNameError: children.classNameError,
                        errorText: children.errorText,
                    }
                }
            });
            break;
        }

        case ACTION.submitForm: {
                event.preventDefault();
                const tempObj = {};
                Array.from(event.target.form.elements).forEach((input) => {
                    if (input.nodeName === "INPUT") {
                        tempObj[input.name] = input.value;
                        input.value = '';
                    }
                });
                console.log(tempObj);
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
            event.preventDefault();

            console.log(7, value);
            exchangeOfStates({
                users: {...props.users, [children.nameInput]: value},
            });
            break;
        }

        default:
            alert( "Нет таких значений" );
    }
}


