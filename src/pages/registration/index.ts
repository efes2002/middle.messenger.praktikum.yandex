// eslint-disable-next-line import/no-cycle
import Registration from './registration';
import { withStore } from '../../utils/store';

const withState = withStore((state) => ({ regError: state.regError }));

export default withState(Registration);
