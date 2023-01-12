// eslint-disable-next-line import/no-cycle
import store from '../utils/store';
// eslint-disable-next-line @typescript-eslint/no-redeclare
import API, { UserAPI } from '../api/UserAPI';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async editAvatar(data: FormData) {
    try {
      await this.api.editAvatar(data);
      const user: any = await this.api.editAvatar(data);
      store.set('user', JSON.parse(user));
      console.log('UserController-editAvatar', store.getState());
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new UserController();
