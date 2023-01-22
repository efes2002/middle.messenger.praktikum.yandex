// eslint-disable-next-line import/no-cycle,import/extensions
import Messenger from './messenger';
import { withStore } from '../../utils/store';

const withState = withStore((state) => ({
  user: state.user,
  isLoggingChat: state.isLoggingChat,
}));

export default withState(Messenger);
