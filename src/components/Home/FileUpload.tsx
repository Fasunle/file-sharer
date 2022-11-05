import {useForm} from 'react-hook-form';
import {Error} from '../errors';

export default function FileUpload() {
  const {
    formState: {errors},
    register,
  } = useForm<{filename: string; email: string}>();

  return (
    <section className='uploader'>
      <div className='home__content--file-transfer'>
        <div className='carpet'>
          <form className='transfer-container'>
            <input
              type='file'
              {...register('filename', {required: true})}
              className='file-input'
            />
            <button className='btn btn--upload'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#00bfb2'
                className='w-12 h-12 icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
                />
              </svg>{' '}
              Upload
            </button>
          </form>

          <p className='supported-types'>jpeg, png, mp3 and pdf</p>
        </div>
      </div>

      <form className='receiver-details'>
        <div className='input-container'>
          {errors.email?.message?.length && (
            <Error message={errors.email?.message as string} />
          )}
          <label htmlFor='email'>
            Receiver &apos;s Email:{' '}
            <span aria-hidden='true' className='asterick'>
              &#42;
            </span>
          </label>
          <input
            className='email'
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

        <button type='submit' className='btn btn--upload'>
          Upload
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#191923'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
