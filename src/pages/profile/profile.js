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
                const value = event.target.form[0].value;
                event.preventDefault();
                exchangeOfStates({
                    users: {...this.props.users, [children.nameInput]: value},
                });
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
                    {{{InputProfile title='Почта' name='email' validation="email" value=users.email isOpen=isOpen isSimpleForm=true }}}
                    {{{InputProfile title='Логин' name='login' validation="login" value=users.login isOpen=isOpen isSimpleForm=true }}}
                    {{{InputProfile title='Имя'   name='firstName' validation="name" value=users.firstName isOpen=isOpen isSimpleForm=true }}}
                    {{{InputProfile title='Фамилия' name='secondName' validation="name" value=users.secondName isOpen=isOpen isSimpleForm=true }}}
                    {{{InputProfile title='Имя в чате'name='displayName' validation="name" value=users.displayName isOpen=isOpen isSimpleForm=true }}}
                    {{{InputProfile title='Телефон' name='phone' validation="phone" value=users.phone isOpen=isOpen isSimpleForm=true }}}
                    {{{InputProfile title='Пароль' name='password' value='********' validation="password" isOpen=isOpen isPasswordForm=true }}}
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
                        nameInput=popupProfile.setting.nameInput
                        value=popupProfile.setting.value
                        isSimpleForm=popupProfile.name.isSimpleForm 
                        isPasswordForm=popupProfile.name.isPasswordForm 
                        isAvatarForm=popupProfile.name.isAvatarForm
                }}}
            </section>
        `;
    }
}
