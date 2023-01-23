import { expect } from 'chai';
import Router from './Router';
import Block, { Props } from './block';

let router: Router;

class TestBlock extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return ` 
        <div></div> `;
  }
}

describe('Тест Router', () => {
  before(() => {
    router = new Router();
    router.use('/', TestBlock);
  });

  it('Проверка приватного поля', () => {
    expect(router).to.have.property('routes');
  });

  it('Проверка путь при первом старте', () => {
    router.start();
    const { pathname } = window.location;
    expect(pathname).to.be.equal('/');
  });

  it('Проверка перехода метод go', () => {
    router.go('/sign-up');

    const { pathname } = window.location;

    expect(pathname).to.be.equal('/sign-up');
  });
});
