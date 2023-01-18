import { withStore } from '../../../utils/store';
import MessengerRightTop from './messengerRightTop';

const withState = withStore((state) => ({
  selectedChatData: state.selectedChatData,
}));

export default withState(MessengerRightTop);
