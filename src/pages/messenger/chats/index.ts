// eslint-disable-next-line import/no-cycle,import/extensions
import Chats from './Chats';
import { withStore } from '../../../utils/store';

const withState = withStore((state) => ({
  chats: state.chats,
}));

export default withState(Chats);
