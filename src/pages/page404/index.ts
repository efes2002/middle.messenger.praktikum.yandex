// eslint-disable-next-line import/no-cycle
import Page404 from './page404';
// eslint-disable-next-line import/no-cycle
import state from '../../index';

export default class extends Page404 {
  constructor(props: any) {
    super({ ...props, ...state });
  }
}
