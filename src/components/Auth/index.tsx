import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import Login from './Login';

export default function Auth() {
  const location = useLocation();
  const initialState = location.pathname === '/auth/reset';
  const [forgotPassword, setForgotPassword] = useState(initialState);
  return (
    <main className='auth--container'>
      <div className='auth__card--container'>
        <div>
          <h2>Have an account&#63;</h2>
          <Link to='/auth/login'>
            <button
              className='btn btn--cta'
              onClick={() => setForgotPassword(false)}
            >
              Login Here
            </button>
          </Link>
        </div>
        <div>
          <h2>Forgot Password&#63;</h2>
          <Link to='/auth/reset'>
            <button
              className='btn btn--cta'
              onClick={() => setForgotPassword(true)}
            >
              Click Here
            </button>
          </Link>
        </div>
      </div>

      <div className={`overlay ${forgotPassword ? 'to-right' : ''}`}>
        {!forgotPassword ? <Login /> : <ForgotPassword />}
      </div>
    </main>
  );
}
