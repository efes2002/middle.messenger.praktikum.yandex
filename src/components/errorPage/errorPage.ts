import Block from '../../utils/block';

export default class ErrorPage extends Block {
  constructor(props: any) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
        <section class="error-page">
            <h1 class="error-page__title">{{title}}</h1>
            <h2 class="error-page__subtitle">{{subtitle}}</h2>
            <a class="error-page__link cursor-hover" onclick="togglePage('main')">{{linktitle}}</a>
        </section>`;
  }
}
