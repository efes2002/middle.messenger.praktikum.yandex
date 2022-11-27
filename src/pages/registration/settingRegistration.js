export default  {
    items : [
        {
            name: 'email',
            title: 'Почта',
            value: '',
            id: 'regPageEmail',
            error: true,
            errorText: 'Не валидный email'
        },
        {
            name: 'login',
            title: 'Логин',
            value: '',
            id: 'regPageLogin',
            error: false,
            errorText: ''
        },
        {
            name: 'first_name',
            title: 'Имя',
            value: '',
            id: 'regPageFirstName',
            error: false,
            errorText: ''
        },
        {
            name: 'second_name',
            title: 'Фамилия',
            value: '',
            id: 'regPageLastName',
            error: false,
            errorText: ''
        },
        {
            name: 'phone',
            title: 'Телефон',
            value: '',
            id: 'regPagePhone',
            error: false,
            errorText: ''
        },
        {
            name: 'password',
            title: 'Пароль',
            value: '',
            id: 'regPagePassword',
            error: false,
            errorText: ''
        },
        {
            name: 'passwordSecond',
            title: 'Пароль (ещё раз)',
            value: '',
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
};
