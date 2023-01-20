// eslint-disable-next-line import/no-cycle
import { dispatch, ACTION } from '../../utils/dispatch';
import Block, { Children } from '../../utils/block';
import store from '../../utils/store';
// eslint-disable-next-line import/no-cycle
import authController from '../../controllers/AuthController';

export default class Profile extends Block {
  constructor(props: any) {
    super({
      ...props,
      isOpenForm: false,
      popupForm: {
        isOpenName: {
          isSimpleForm: false,
          isPasswordForm: false,
          isAvatarForm: false,
        },
        setting: {
          title: '',
          name: '',
          value: '',
          id: null,
          classNameError: '',
          errorText: '',
        },
      },
      user: {
        id: store.getState().user.id,
        avatar: store.getState().user.avatar,
        email: store.getState().user.email,
        login: store.getState().user.login,
        first_name: store.getState().user.first_name,
        second_name: store.getState().user.second_name,
        display_name: store.getState().user.display_name,
        phone: store.getState().user.phone,
      },
      logOut: () => {
        authController.logout();
      },
      isOpen: (element: Block, children: Children) => {
        this.props.isOpenForm = true;
        this.props.popupForm = {
          isOpenName: {
            isSimpleForm: element.props.isSimpleForm,
            isPasswordForm: element.props.isPasswordForm,
            isAvatarForm: element.props.isAvatarForm,
          },
          setting: {
            title: children.title,
            name: children.name,
            value: children.value,
            id: children.id,
            classNameError: children.classNameError,
            errorText: children.errorText,
          },
        };
      },
      closePopup: () => {
        this.props.isOpenForm = false;
      },
      editProfile: (_element: Block, children: Children, event: Event) => {
        console.log(33)
        dispatch(
          ACTION.editProfile,
          { props: this.props, event, children },
          this.props.closePopup,
        );
      },
      editAvatar: (_element: Block, _children: Children, event: Event) => {
        dispatch(ACTION.editAvatar, { props: this.props, event, element: _element });
        this.props.closePopup();
      },
      editPassword: (_element: Block, _children: Children, event: Event) => {
        dispatch(
          ACTION.editPassword,
          { props: this.props, event, element: _element },
          this.props.closePopup,
        );
      },
    });
  }

  render() {
    // language=hbs
    return `
            <section class="profile">
                {{{AvatarProfile 
                        isAvatarForm=true 
                        isOpen=isOpen 
                        editAvatar=editAvatar 
                        avatar=user.avatar}}}
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
                        link=""
                        onclick=logOut
                        label="Выйти из приложения"
                }}}
            {{#if isOpenForm}}
                {{{Popup
                        closePopup=closePopup
                        editProfile=editProfile
                        editAvatar=editAvatar
                        editPassword=editPassword
                        isOpen=popupForm.isOpenValue
                        namePopupForm=popupForm.isOpenName
                        setting=popupForm.setting 
                }}}
            {{/if}}
            </section>
        `;
  }
}
