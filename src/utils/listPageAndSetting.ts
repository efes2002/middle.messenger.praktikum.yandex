// eslint-disable-next-line import/no-cycle
import Messenger from '../pages/messenger';
// eslint-disable-next-line import/no-cycle
import Page404 from '../pages/page404';
// eslint-disable-next-line import/no-cycle
import Page500 from '../pages/page500';
// eslint-disable-next-line import/no-cycle
import Profile from '../pages/profile';
// eslint-disable-next-line import/no-cycle
import Login from '../pages/login';
// eslint-disable-next-line import/no-cycle
import Registration from '../pages/registration';

export const PAGE_NAME : Record<string, string> = {
  messenger: 'messenger',
  page404: 'page404',
  page500: 'page500',
  profile: 'settings',
  login: '',
  registration: 'sign-up',
};

const listPage: Record<string, any> = {
  [PAGE_NAME.messenger]: Messenger,
  [PAGE_NAME.page404]: Page404,
  [PAGE_NAME.page500]: Page500,
  [PAGE_NAME.profile]: Profile,
  [PAGE_NAME.login]: Login,
  [PAGE_NAME.registration]: Registration,
};

export const protectPage: Array<string> = [
  PAGE_NAME.messenger,
  PAGE_NAME.profile,
];

export default listPage;
