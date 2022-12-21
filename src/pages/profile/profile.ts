// eslint-disable-next-line import/no-cycle
import { dispatch, ACTION } from '../../utils/dispatch';
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
                    {{user.display_name}}
                </h1>
                <ul class="profile__items">
                    {{{InputProfile 
                            title='Почта' 
                            name='email'
                            id='profPageEmail'
                            value=user.email 
                            isOpen=isOpen 
                            isSimpleForm=true 
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Логин' 
                            name='login'
                            id='profPageLogin'
                            value=user.login 
                            isOpen=isOpen 
                            isSimpleForm=true 
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Имя'   
                            name='first_name'
                            id='profPageFirstName'
                            value=user.first_name 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Фамилия' 
                            name='second_name'
                            id='profPageSecondName'
                            value=user.second_name 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Имя в чате'
                            name='display_name'
                            id='profPageDisplayName' 
                            value=user.display_name 
                            isOpen=isOpen
                            isSimpleForm=true
                            classNameError='form__input-error'
                            errorText='невалидно' }}}
                    {{{InputProfile 
                            title='Телефон' 
                            name='phone'
                            id='profPagePhone'
                            value=user.phone 
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
                <div class="profile__box-link cursor-hover">
                    {{{LinkImg
                            className="profile__img-link"
                            link="/messenger"
                            src="static/img12.svg"
                            alt="кнопка настройки"
                    }}}
                    {{{Link
                            className="profile__title-link"
                            link="/messenger"
                            label="Назад"
                    }}}
                </div>
                {{{Link
                        className="profile__exit cursor-hover"
                        link="/"
                        label="Выйти из приложения"
                }}}
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
