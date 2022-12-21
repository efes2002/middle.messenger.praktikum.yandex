// eslint-disable-next-line import/no-cycle
import Registration from './registration';

export default class extends Registration {
  constructor(props: any) {
    super({ ...props });
  }
}
