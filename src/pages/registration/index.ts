// eslint-disable-next-line import/no-cycle
import Registration from './registration';
// eslint-disable-next-line import/no-cycle
import state, { store } from '../../index';

export default class extends Registration {
  constructor(props: any) {
    super({ ...props, ...state });
    store.on(this);
  }
}
