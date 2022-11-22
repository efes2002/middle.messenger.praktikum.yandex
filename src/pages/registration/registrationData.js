export default  {
    items : [
        {
            name: 'email',
            title: 'Почта',
            value: 'pochta@yandex.r111.u',
            id: 'regPageEmail',
            error: true,
            errorText: 'Не валидный email'
        },
        {
            name: 'login',
            title: 'Логин',
            value: 'ivanivanov',
            id: 'regPageLogin',
            error: false,
            errorText: ''
        },
        {
            name: 'first_name',
            title: 'Имя',
            value: 'Иван',
            id: 'regPageFirstName',
            error: false,
            errorText: ''
        },
        {
            name: 'second_name',
            title: 'Фамилия',
            value: 'Иванов',
            id: 'regPageLastName',
            error: false,
            errorText: ''
        },
        {
            name: 'phone',
            title: 'Телефон',
            value: '+7(909)967-30-30',
            id: 'regPagePhone',
            error: false,
            errorText: ''
        },
        {
            name: 'password',
            title: 'Пароль',
            value: '••••••••••••',
            id: 'regPagePassword',
            error: false,
            errorText: ''
        },
        {
            name: 'passwordSecond',
            title: 'Пароль (ещё раз)',
            value: '••••••••••••',
            id: 'regPageSecondPassword',
            error: true,
            errorText: 'Пароли не совпадают'
        },
    ],
    title: 'Регистрация',
    button: {
        title: 'Зарегистрироваться'
    },
    link: {
        title: 'Войти',
    },
    errorBox: {
        isErrorBox: false,
        text: "",
    },
    currentPage: {
        isLogin: false,
        isRegis: true,
    },
};
