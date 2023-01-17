// eslint-disable-next-line import/no-cycle,import/extensions
import Messenger from './messenger';
import { withStore } from '../../utils/store';

const withState = withStore((state) => ({
  user: state.user,
}));

export default withState(Messenger);
