export default  {
    items : [
        {title: 'Почта', value: 'pochta@yandex.r111.u', id: 'regPageEmail', error: true, errorText: 'Не валидный email'},
        {title: 'Логин', value: 'ivanivanov', id: 'regPageLogin', error: false, errorText: ''},
        {title: 'Имя', value: 'Иван', id: 'regPageFirstName', error: false, errorText: ''},
        {title: 'Фамилия', value: 'Иванов', id: 'regPageLastName', error: false, errorText: ''},
        {title: 'Телефон', value: '+7(909)967-30-30', id: 'regPagePhone', error: false, errorText: ''},
        {title: 'Пароль', value: '••••••••••••', id: 'regPagePassword', error: false, errorText: ''},
        {title: 'Пароль (ещё раз)', value: '••••••••••••', id: 'regPageSecondPassword', error: true, errorText: 'Пароли не совпадают'},
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