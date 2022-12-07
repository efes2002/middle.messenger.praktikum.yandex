// eslint-disable-next-line import/no-cycle
import Login from './login';
// eslint-disable-next-line import/no-cycle
import state from '../../index';

export default class extends Login {
  constructor(props: any) {
    super({ ...props, ...state });
  }
}
