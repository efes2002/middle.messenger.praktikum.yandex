// eslint-disable-next-line import/no-cycle
import Main from './main';

export default class extends Main {
  constructor(props: any) {
    super({ ...props });
  }
}
