import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {
  AuthError,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import auth from '../../config/auth';
import {Error} from '../errors';
import {useState} from 'react';
import {createUser} from '../../api/mutations';
import {getLoadingState} from '../../styles/components/custom-hook';

const Signup = () => {
  const [signupError, setSignupError] = useState('');
  const {isLoading, setLoadingState} = getLoadingState();
  const {
    handleSubmit,
    register,
    formState: {errors},
    setValue,
  } = useForm<{email: string; password: string; username: string}>();
  const navigate = useNavigate();
  const signUp = ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => {
    createUserWithEmailAndPassword(auth, email as string, password)
      // save user information to localStorage and database
      .then(async (credentials: UserCredential) => {
        const accessToken = await credentials.user.getIdToken();
        const tokenResult = await credentials.user.getIdTokenResult();
        const userId = tokenResult.claims.sub;

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', userId as any);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', credentials.user.refreshToken);

        if (userId) {
          await createUser({userId: userId, email, username});
        }

        // clear fields after submission
        setValue('email', '');
        setValue('password', '');
        setValue('username', '');

        // redirect to dashboad
        navigate('/');
      })
      .catch((error: AuthError) => {
        if (error.message.search('auth/email-already-in-use')) {
          setSignupError('User with this email already exist. Login instead.');
          // send user to login page
          navigate('/auth/login');
        } else {
          setSignupError(error.message);
        }
      });
  };
  return (
    <div className='auth'>
      <form
        className='signup__form'
        onSubmit={handleSubmit((data) => signUp(data))}
      >
        <h1 className='title'>Signup</h1>
        <div>
          <Error message={errors.username?.message as string} />
          <label htmlFor='username'>
            Username:{' '}
            <span aria-hidden='true' className='asterick'>
              &#42;
            </span>
          </label>
          <input
            className='signup__form--username'
            type='text'
            id='username'
            placeholder='John Doe'
            {...register('username', {
              required: 'Username is required',
              minLength: 5,
              maxLength: 15,
            })}
          />
        </div>
        <div>
          <Error message={errors.email?.message as string} />
          <label htmlFor='email'>
            Email:{' '}
            <span aria-hidden='true' className='asterick'>
              &#42;
            </span>
          </label>
          <input
            className='signup__form--email'
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
            className='signup__form--password'
            type='password'
            id='password'
            placeholder='a very long password'
            {...register('password', {required: 'Password is required'})}
          />
        </div>
        <Error message={signupError} />
        <button
          type='submit'
          className={`signup__form--btn ${
            isLoading ? 'loading-state-active' : ''
          }`}
          onClick={(e) => setLoadingState()}
        >
          Signup
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#fff'
            className='w-6 h-6 icon'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            />
          </svg>
        </button>
        <p className='info'>
          You have an account already&#63; <Link to='/auth/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
