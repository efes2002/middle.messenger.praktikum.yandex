// eslint-disable-next-line import/no-cycle
import Profile from './profile';
// eslint-disable-next-line import/no-cycle
import state from '../../index';

export default class extends Profile {
  constructor(props: any) {
    super({ ...props, ...state });
  }
}
