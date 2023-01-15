// eslint-disable-next-line import/no-cycle
import Login from './login';
import { withStore } from '../../utils/store';

const withState = withStore((state) => ({ loginError: state.loginError }));

export default withState(Login);
