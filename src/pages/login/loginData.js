export default  {
    items : [
        {
            name: 'login',
            title: 'Логин',
            value: 'Ivan1989',
            id: 'loginPageLogin',
            error: false,
            errorText: 'sdfdsfdsf'
        },
        {
            name: 'password',
            title: 'Пароль',
            value: '••••••••••••',
            id: 'loginPagePassword',
            error: false,
            errorText: ''
        }
    ],
    title: 'Вход',
    button: {
        title: 'Войти'
    },
    link: {
        title: 'Нет аккаунта?',
    },
    errorBox: {
        isErrorBox: true,
        text: "Неверный логин или пароль ",
    },
    currentPage: {
        isLogin: true,
        isRegis: false,
    },
};
