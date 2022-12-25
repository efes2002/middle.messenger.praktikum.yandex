import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
import { router } from '../index';
import store from '../utils/store';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  signin(data: SigninData) {
    return this.api.signin(data);
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();

    store.set('user', user);
  }

  async logout() {
    try {
      await this.api.logout();

      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
