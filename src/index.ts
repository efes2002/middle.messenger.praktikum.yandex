// eslint-disable-next-line import/no-cycle
import { registrationHelpers } from './utils/registrationHelpers';
// eslint-disable-next-line import/no-cycle
import PAGES from './utils/listPageAndSetting';
import Router from './utils/router';
// eslint-disable-next-line import/no-cycle
import Store from './utils/store';
import startValue from './utils/startValue';

export const store = new Store();

store.initializationState(startValue);

export default store.getState();

export const router: Router = new Router();

document.addEventListener('DOMContentLoaded', () => {
  registrationHelpers();

  Object.entries(PAGES)
    .forEach(([key, value]: [string, any]) => {
      router.use(`/${key}`, value);
    });
  router.start();
});
