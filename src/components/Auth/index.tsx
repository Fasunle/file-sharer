import {useLocation} from 'react-router-dom';

export default function Auth() {
  const location = useLocation();
  return (
    <main className='auth--container'>
      <div className='auth__card--container'>
        <div>
          <h2>Have an account&#63;</h2>
          <button className='btn btn--cta'>Login Here</button>
        </div>
        <div>
          <h2>Forgot Password&#63;</h2>
          <button className='btn btn--cta'>Click Here</button>
        </div>
      </div>
    </main>
  );
}
