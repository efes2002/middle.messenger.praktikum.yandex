// eslint-disable-next-line import/no-cycle
import { registrationHelpers } from './utils/registrationHelpers';
import './index.css';
// eslint-disable-next-line import/no-cycle
import PAGES from './utils/listPageAndSetting';
// eslint-disable-next-line import/no-cycle
import Router from './utils/router';
// eslint-disable-next-line import/no-cycle,import/no-named-as-default
import AuthController from './controllers/AuthController';
import store from './utils/store';

// eslint-disable-next-line import/prefer-default-export
export const router = new Router();

document.addEventListener('DOMContentLoaded', async () => {
  registrationHelpers();

  Object.entries(PAGES)
    .forEach(([key, value]: [string, any]) => {
      router.use(`/${key}`, value);
    });

  store.set('loginError', '');
  store.set('regError', '');
  store.set('profilePasError', '');

  try {
    await AuthController.fetchUser();
    router.start();
    store.set('isAuth', true);
  } catch (e) {
    router.start();
    store.set('isAuth', false);
  }
});
