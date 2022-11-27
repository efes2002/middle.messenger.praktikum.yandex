import testDataMain from "../pages/main/testDataMain";

export const ACTION = {
    closePopup: 'closePopup',
    isOpen: 'isOpen'
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
            nameInput: '',
            value: ''
        }
    },
    messages: testDataMain.messages,
    chats: testDataMain.chats,
}

export const dispatch = (action, value) => {

    switch (action) {
        case ACTION.closePopup: {
            const { props } = value
            exchangeOfStates({
                popupProfile: {...props.popupProfile, isOpen: false}
            })
            break;
        }
        case ACTION.isOpen: {
            const { props, element, children } = value;
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
                        nameInput: children.name,
                        value: children.value
                    }
                }
            });
            break;
        }
        default:
            alert( "Нет таких значений" );
    }
}


