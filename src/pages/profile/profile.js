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
                            id='profPageEmail'
                            value=users.email 
                            isOpen=isOpen 
                            isSimpleForm=true 
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Логин' 
                            name='login'
                            id='profPageLogin'
                            value=users.login 
                            isOpen=isOpen 
                            isSimpleForm=true 
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Имя'   
                            name='first_name'
                            id='profPageFirstName'
                            value=users.firstName 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Фамилия' 
                            name='second_name'
                            id='profPageSecondName'
                            value=users.secondName 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Имя в чате'
                            name='display_name'
                            id='profPageDisplayName' 
                            value=users.displayName 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Телефон' 
                            name='phone'
                            id='profPagePhone'
                            value=users.phone 
                            isOpen=isOpen 
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно'}}}
                    {{{InputProfile 
                            title='Пароль' 
                            name='password'
                            id='profPagePassword'
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
            {{#if popupProfile.isOpen}}
                {{{Popup
                        closePopup=closePopup
                        editProfile=editProfile
                        editAvatar=editAvatar
                        editPassword=editPassword
                        isOpen=popupProfile.isOpen
                        namePopupForm=popupProfile.namePopupForm
                        setting=popupProfile.setting 
                }}}
            {{/if}}
            </section>
        `;
    }
}
