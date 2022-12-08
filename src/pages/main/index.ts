// eslint-disable-next-line import/no-cycle
import Main from './main';
// eslint-disable-next-line import/no-cycle
import state, { store } from '../../index';

export default class extends Main {
  constructor(props: any) {
    super({ ...props, ...state });
    store.on(this);
  }
}
