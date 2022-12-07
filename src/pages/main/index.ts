// eslint-disable-next-line import/no-cycle
import Main from './main';
// eslint-disable-next-line import/no-cycle
import state from '../../index';

export default class extends Main {
  constructor(props: any) {
    super({ ...props, ...state });
  }
}
