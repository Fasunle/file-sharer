import {useLocation} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';

export default function Auth() {
  const location = useLocation();
  return (
    <main>{location.pathname === '/auth/signup' ? <Signup /> : <Login />}</main>
  );
}
