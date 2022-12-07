// eslint-disable-next-line import/no-cycle
import { registrationHelpers } from './utils/registrationHelpers';
// eslint-disable-next-line import/no-cycle
import PAGES from './utils/listPageAndSetting';
import Router from './utils/router';
import { state } from './utils/state';

export default state;

export const router: Router = new Router();

document.addEventListener('DOMContentLoaded', () => {
  registrationHelpers();

  Object.entries(PAGES)
    .forEach(([key, value]: [string, any]) => {
      router.use(`/${key}`, value);
    });
  router.start();
});
