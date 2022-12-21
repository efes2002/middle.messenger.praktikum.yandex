// eslint-disable-next-line import/no-cycle
import Login from './login';

export default class extends Login {
  constructor(props: any) {
    super({ ...props });
  }
}
