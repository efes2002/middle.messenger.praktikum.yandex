import Block from "../../utils/block";

export class Profile extends Block {
    constructor(props) {
        super({
            ...props,
            //isOpenPopupProfile: false,
            //funcs: console.log('Создание компанента'),
            isOpen: ()=>{
                //console.log(81, this.props.isOpenPopupProfile, this.props.isOpenPopupProfile);
                this.props.isOpenPopupProfile = !this.props.isOpenPopupProfile;
                //console.log(82, this.props.isOpenPopupProfile);
            }
        });
    }



    render() {
        //console.log('Рендер profile', this.props.isOpenPopupProfile)
        //language=hbs
        return `
            <section class="profile">
                <img class="profile__avatar cursor-hover"></img>
                <h1 class="profile__title">Иван {{#if isOpenPopupProfile}} ДА {{else}} НЕТ {{/if}}</h1>
                <ul class="profile__items">
                    {{#each items}}
                        {{{InputProfile id=id title=title name=name value=value isOpen=../isOpen}}}
                    {{/each}}
                </ul>
                <div class="profile__box-link cursor-hover" onclick="renderPage('main')">
                    <img class="profile__img-link"></img>
                    <div class="profile__title-link">Назад</div>
                </div>
                <div class="profile__exit cursor-hover" onclick="renderPage('login')">Выйти из приложения</div>
                {{{Popup isPopup=false}}}
            </section>
        `;
    }
}
