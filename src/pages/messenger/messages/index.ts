// eslint-disable-next-line import/no-cycle,import/extensions
import Messages from './Messages';
import { withStore } from '../../../utils/store';

const withState = withStore((state) => ({
  selectedChatId: state.selectedChatId,
  messages: state.messages,
}));

export default withState(Messages);
