// eslint-disable-next-line import/no-cycle
import Messenger from './messenger';

export default class extends Messenger {
  constructor(props: any) {
    super({ ...props });
  }
}
