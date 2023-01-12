import Block, { Props } from '../../../utils/block';

export default class EditAvatarForm extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
            <section class="form-avatar">
                <form class="form-avatar__box" id="formAvatar">
                    <h1 class="popup__title">Редактирование Аватара</h1>
                    <input
                            class="form-avatar__link"
                            type="file"
                            
                            id="input__file">Выбрать файл на компьютере</input>
                    <div class="form-avatar__box-button">
                        {{{Button
                                className="popup__button popup__button-not"
                                nameInput=nameInput
                                label="Отмена"
                                onclick=closePopup
                                form="formAvatar"}}}
                        {{{Button
                                className="popup__button popup__button-yes"
                                nameInput=nameInput
                                label="Сохранить"
                                onclick=editAvatar
                                form="formAvatar"}}}
                    </div>
                </form>
            </section>
        `;
  }
}
