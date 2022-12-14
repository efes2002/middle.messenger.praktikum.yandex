// eslint-disable-next-line import/no-cycle
import Main from '../pages/main/main';
import Page404 from '../pages/page404/page404';
import Page500 from '../pages/page500/page500';
// eslint-disable-next-line import/no-cycle
import Profile from '../pages/profile/profile';
// eslint-disable-next-line import/no-cycle
import Login from '../pages/login/login';
// eslint-disable-next-line import/no-cycle
import Registration from '../pages/registration/registration';

export const PAGE_NAME : Record<string, string> = {
  main: 'main',
  page404: 'page404',
  page500: 'page500',
  profile: 'profile',
  login: 'login',
  registration: 'registration',
};

export default {
  [PAGE_NAME.main]: Main,
  [PAGE_NAME.page404]: Page404,
  [PAGE_NAME.page500]: Page500,
  [PAGE_NAME.profile]: Profile,
  [PAGE_NAME.login]: Login,
  [PAGE_NAME.registration]: Registration,
};
