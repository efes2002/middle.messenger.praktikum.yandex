import Block from "../../utils/block";
import { dispatch, ACTION } from "../../utils/state.js"

export class Profile extends Block {
    constructor(props) {
        super({
            ...props,
            isOpen: (element, children) => {
                dispatch(ACTION.isOpen, { props: this.props, element: element, children: children })
            },
            closePopup: ()=> {
                dispatch(ACTION.closePopup, { props: this.props })
            },
            editProfile: (element, children, event) => {
                console.log(8, event.target.form.elements[0].value)
                dispatch(ACTION.editProfile, { props: this.props, event: event, children: children })
                dispatch(ACTION.closePopup, { props: this.props });
            },
            editAvatar: (element, children, event) => {
                event.preventDefault();
                dispatch(ACTION.closePopup, { props: this.props })
            },
            editPassword: (element, children, event)=> {
                event.preventDefault();
                dispatch(ACTION.closePopup, { props: this.props })
            }
        });
    }

    render() {
        //language=hbs
        return `
            <section class="profile">
                {{{AvatarProfile isAvatarForm=true isOpen=isOpen editAvatar=editAvatar}}}
                <h1 class="profile__title">Иван {{#if popupProfile.isOpen}} ДА {{else}} НЕТ {{/if}}</h1>
                <ul class="profile__items">
                    {{{InputProfile 
                            title='Почта' 
                            name='email' 
                            value=users.email 
                            isOpen=isOpen 
                            isSimpleForm=true 
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Логин' 
                            name='login' 
                            value=users.login 
                            isOpen=isOpen 
                            isSimpleForm=true 
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Имя'   
                            name='first_name' 
                            value=users.firstName 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Фамилия' 
                            name='second_name' 
                            value=users.secondName 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Имя в чате'
                            name='display_name' 
                            value=users.displayName 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Телефон' 
                            name='phone' 
                            value=users.phone 
                            isOpen=isOpen 
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно'}}}
                    {{{InputProfile 
                            title='Пароль' 
                            name='password' 
                            value='********' 
                            isOpen=isOpen 
                            isPasswordForm=true
                            classNameError='form__input-error'
                            errorText='невалидно'}}}
                </ul>
                <div class="profile__box-link cursor-hover" onclick="renderPage('main')">
                    <img class="profile__img-link" src="static/img12.svg"></img>
                    <div class="profile__title-link">Назад</div>
                </div>
                <div class="profile__exit cursor-hover" onclick="renderPage('login')">Выйти из приложения</div>
                {{{Popup 
                        isOpen=popupProfile.isOpen
                        closePopup=closePopup
                        editProfile=editProfile
                        editAvatar=editAvatar
                        editPassword=editPassword
                        title=popupProfile.setting.title
                        name=popupProfile.setting.name
                        value=popupProfile.setting.value
                        classNameError=popupProfile.setting.classNameError
                        errorText=popupProfile.setting.errorText
                        isSimpleForm=popupProfile.name.isSimpleForm 
                        isPasswordForm=popupProfile.name.isPasswordForm 
                        isAvatarForm=popupProfile.name.isAvatarForm
                }}}
            </section>
        `;
    }
}
