import {useState, ChangeEvent} from 'react';
import {useForm} from 'react-hook-form';
import {Error} from '../errors';

export default function FileUpload() {
  const {
    formState: {errors},
    handleSubmit,
    register,
  } = useForm<{filename: string; email: string}>();
  const [files, setFiles] = useState<string[]>([]);
  // https://pinoria.com/how-to-add-typescript-types-for-react-checkbox-events-and-handlers/#:~:text=To%20add%20TypeScript%20types%20for%20React%20checkbox%20events,%7D%3B%20return%20%3Cinput%20type%3D%22checkbox%22%20onChange%3D%20%7BonChange%7D%20%2F%3E%3B%20%7D%3B

  const addNewFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.value;
    setFiles([...files, file]);
  };

  return (
    <section className='uploader'>
      <div className='home__content--file-transfer'>
        <div className='carpet'>
          <form className='transfer-container'>
            <input
              type='file'
              {...register('filename', {required: true})}
              className='file-input'
              onChange={addNewFile}
            />
            <button className='btn btn--upload'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-14 h-14 icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>{' '}
              Select
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
            stroke='#44445f'
            className='w-10 h-10 p-1 icon'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
