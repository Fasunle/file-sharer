import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword, AuthError} from 'firebase/auth';
import {useState} from 'react';
import auth from '../../config/auth';
import {Error} from '../errors';
import {fetchUser} from '../../api/queries';
import {getLoadingState} from '../../styles/components/custom-hook';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const {isLoading, setLoadingState} = getLoadingState();
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm<{email: string; password: string}>();

  const navigate = useNavigate();

  const signIn = ({email, password}: {email: string; password: string}) => {
    signInWithEmailAndPassword(auth, email as string, password)
      // save user information to localStorage
      .then(async (credentials) => {
        const accessToken = await credentials.user.getIdToken();
        const tokenResult = await credentials.user.getIdTokenResult();
        const userId = tokenResult.claims.sub;

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', userId as any);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', credentials.user.refreshToken);

        if (userId) {
          const {data} = await fetchUser(userId);
          localStorage.setItem('username', data.username);
        }

        // redirect to dashboad
        navigate('/');
      })
      .catch((error: AuthError) => setLoginError(error.message));
  };
  return (
    <div className='auth auth--reset'>
      <form
        className='login__form'
        onSubmit={handleSubmit((data) =>
          signIn({email: data.email, password: data.password}),
        )}
      >
        <h1 className='title'>Login</h1>
        <div>
          <Error message={errors.email?.message as string} />
          <label htmlFor='email'>
            Email:{' '}
            <span aria-hidden='true' className='asterick'>
              &#42;
            </span>
          </label>
          <input
            className='login__form--email'
            type='email'
            id='email'
            placeholder='abc@gmail.com'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
          />
        </div>

        <div>
          <Error message={errors.password?.message as string} />
          <label htmlFor='password'>
            Password:{' '}
            <span aria-hidden='true' className='asterick'>
              &#42;
            </span>
          </label>
          <input
            className='login__form--password'
            type='password'
            id='password'
            placeholder='a very long password'
            {...register('password', {required: 'Password is required'})}
          />
        </div>

        <Error message={loginError} />
        <button
          type='submit'
          className={`login__form--btn ${
            isLoading ? 'loading-state-active' : ''
          }`}
          onClick={(e) => setLoadingState()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#fff'
            className='w-6 h-6  login-icon'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
            />
          </svg>
          Login
        </button>
        <p className='info'>
          You don&apos;t have an account already&#63;{' '}
          <Link to='/auth/signup'>Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
