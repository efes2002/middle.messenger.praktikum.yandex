// eslint-disable-next-line import/no-cycle
import Profile from './profile';
import { withStore } from '../../utils/store';

const withUserInfo = withStore((state) => ({ user: state.user }));

export default withUserInfo(Profile);
