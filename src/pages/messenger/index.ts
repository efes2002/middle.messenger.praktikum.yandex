// eslint-disable-next-line import/no-cycle,import/extensions
import Messenger from './messenger';
import { withStore } from '../../utils/store';

const withState = withStore((state) => ({
  user: state.user,
  selectedChatId: state.selectedChatId,
  selectedChatId2: state.selectedChatId2,
}));

export default withState(Messenger);
