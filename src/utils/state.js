import testDataMain from "../pages/main/testDataMain";

export const state =  {
    users: {
        id: '',
        avatar: '',
        email: 'pochta@yandex.ru',
        login: 'Ivan1989',
        firstName: 'Иван',
        secondName: 'Иванов',
        display_name: 'Иванчик',
        phone: `+7(907)777-77-77`
    },
    isLogin: true,
    listChats : [],
    liveChatId : '',
    liveMessages: [],
    isOpenPopupProfile: false,
    messages: testDataMain.messages,
    chats: testDataMain.chats,
}


