// eslint-disable-next-line import/no-cycle
import Profile from './profile';
import { withStore } from '../../utils/store';
import startValue from '../../utils/startValue';

const withState = withStore((state) => ({
  popupProfile: startValue.popupProfile,
  user: startValue.user,
  ...state,
}));

// eslint-disable-next-line import/prefer-default-export
export default withState(Profile);
