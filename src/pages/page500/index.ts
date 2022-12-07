// eslint-disable-next-line import/no-cycle
import Page500 from './page500';
// eslint-disable-next-line import/no-cycle
import state from '../../index';

export default class extends Page500 {
  constructor(props: any) {
    super({ ...props, ...state });
  }
}
