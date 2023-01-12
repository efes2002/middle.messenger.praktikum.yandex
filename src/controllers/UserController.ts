// eslint-disable-next-line import/no-cycle
import store from '../utils/store';
// eslint-disable-next-line @typescript-eslint/no-redeclare
import API, { UserAPI, PasswordData, ProfileData } from '../api/UserAPI';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async editAvatar(data: FormData) {
    try {
      await this.api.editAvatar(data);
      const user: any = await this.api.editAvatar(data);
      const newData = JSON.parse(user);
      store.set('user', newData);
    } catch (e: any) {
      console.error(e);
    }
  }

  async editPassword(data: PasswordData):Promise<void> {
    try {
      await this.api.editPassword(data);
      console.log('password edit OK');
    } catch (e: any) {
      console.error(e);
    }
  }

  async editProfile(data: ProfileData):Promise<void> {

    console.log('controllerEditProfile Data=', data);
    try {
      const user: any = await this.api.editProfile(data);
      const newData = JSON.parse(user);
      store.set('user', { ...newData });
      console.log('profile edit OK   newData=', newData);
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new UserController();
