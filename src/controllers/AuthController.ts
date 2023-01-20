import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
// eslint-disable-next-line import/no-cycle
import { router } from '../index';
import store from '../utils/store';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      router.go('/');
      store.set('loginError', '');
    } catch (e: any) {
      store.set('loginError', 'неверный логин или пароль');
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  async signup(data: SignupData):Promise<void> {
    try {
      await this.api.signup(data);
      router.go('/');
    } catch (e: any) {
      store.set('isAuth', false);
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  async fetchUser() {
    try {
      const user: any = await this.api.read();
      store.set('user', JSON.parse(user));
      store.set('isAuth', true);
      if (user) { store.set('isAuth', true); }
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  async logout() {
    try {
      await this.api.logout();
      store.set('isAuth', false);
      router.go('/');
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  }
}

export default new AuthController();
