// eslint-disable-next-line import/no-cycle
import { dispatch, ACTION } from '../../utils/state';
import Block, { Children } from '../../utils/block';

export default class Profile extends Block {
  constructor(props: any) {
    super({
      ...props,
      isOpen: (element: Block, children: Children) => {
        dispatch(ACTION.isOpen, { props: this, element, children });
      },
      closePopup: () => {
        dispatch(ACTION.closePopup, { props: this.props });
      },
      editProfile: (_element: Block, children: Children, event: Event) => {
        dispatch(ACTION.editProfile, { props: this.props, event, children });
        dispatch(ACTION.closePopup, { props: this.props });
      },
      editAvatar: (_element: Block, _children: Children, event: Event) => {
        event.preventDefault();
        dispatch(ACTION.closePopup, { props: this.props });
      },
      editPassword: (_element: Block, _children: Children, event: Event) => {
        event.preventDefault();
        dispatch(ACTION.closePopup, { props: this.props });
      },
    });
  }

  render() {
    // language=hbs
    return `
            <section class="profile">
                {{{AvatarProfile isAvatarForm=true isOpen=isOpen editAvatar=editAvatar}}}
                <h1 class="profile__title">
                    {{users.display_name}}
                </h1>
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
                            value=users.first_name 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Фамилия' 
                            name='second_name'
                            id='profPageSecondName'
                            value=users.second_name 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Имя в чате'
                            name='display_name'
                            id='profPageDisplayName' 
                            value=users.display_name 
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
                <div class="profile__box-link cursor-hover" href="/main">
                    <img class="profile__img-link" src="static/img12.svg"></img>
                    <div class="profile__title-link">Назад</div>
                </div>
                <div class="profile__exit cursor-hover" href="/login">
                    Выйти из приложения
                </div>
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
