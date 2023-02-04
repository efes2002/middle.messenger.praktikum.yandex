import { expect } from 'chai';

import Block, { Props } from './block';

class TestBlock extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    // language=hbs
    return ` 
        <div id="TestBlock"></div> `;
  }
}

// @ts-ignore
const newComponent = new TestBlock();

describe('Тестирование класса Block (компонент)', () => {
  it('Разметка страницы совпадает', () => {
    expect(newComponent?.render()).to.eq(` 
        <div id="TestBlock"></div> `);
  });
});
