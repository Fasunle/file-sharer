import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {sendPasswordResetEmail, AuthError} from 'firebase/auth';
import {useState} from 'react';
import auth from '../../config/auth';
import {Error} from '../errors';
import {Info} from '../utils/Info';

const ForgotPassword = () => {
  const [resetError, setResetError] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm<{email: string; password: string}>();

  const resetPassword = ({email}: {email: string}) => {
    setEmail(email);
    sendPasswordResetEmail(auth, email as string)
      .then(() => {
        setResetError('');
        setEmail(email);
        setIsSuccess(true);
      })
      .catch((error: AuthError) => {
        console.log({error});
        setResetError(error.message);
      });
  };
  return (
    <div className='auth auth--reset'>
      <form
        className='reset__form'
        onSubmit={handleSubmit((data) => resetPassword({email: data.email}))}
      >
        <h1 className='title'>Reset Password</h1>
        {isSuccess && (
          <div>
            <Info message={`Password Reset email has been sent to ${email}`} />
          </div>
        )}

        {resetError && <Error message={resetError} />}
        <div>
          <Error message={errors.email?.message as string} />
          <label htmlFor='email'>
            Email:{' '}
            <span aria-hidden='true' className='asterick'>
              &#42;
            </span>
          </label>
          <input
            className='reset__form--email'
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

        <button type='submit' className='reset__form--btn'>
          Reset
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#fff'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
            />
          </svg>
        </button>
        <p className='info'>
          You don&apos;t have an account already&#63;{' '}
          <Link to='/auth/signup'>Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
