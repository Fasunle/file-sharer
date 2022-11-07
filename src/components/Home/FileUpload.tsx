import {useState, ChangeEvent, MouseEvent} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Error} from '../errors';
import {IFile} from '../interface';
import {useUploadFiles} from '../../api/mutations';

type SvgIconPropType = {stroke?: string; strokeWidth?: number};

const initialFileState = {
  file: {name: '', size: '', type: ''},
  tag: '',
};

const SelectButtonIcon = ({stroke, strokeWidth}: SvgIconPropType) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={strokeWidth ?? 1.5}
    stroke={stroke ?? 'currentColor'}
    className='w-14 h-14 icon'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 4.5v15m7.5-7.5h-15'
    />
  </svg>
);

const UploadButtonIcon = ({stroke, strokeWidth}: SvgIconPropType) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={strokeWidth ?? 1.5}
    stroke={stroke ?? 'currentColor'}
    className='w-10 h-10 p-1 icon'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
    />
  </svg>
);

// form validator
const schema = yup.object().shape({
  filename: yup
    .mixed()
    .test('required', 'Please select a file', (value) => value && value.length),
  tag: yup.string().trim().email().required('Image tag is required'),
});

export default function FileUpload() {
  // files local state
  const [tag, setTag] = useState('');
  const [file, setFile] = useState<IFile>(initialFileState);
  const [files, setFiles] = useState<IFile[]>([]);
  // react-query upload files
  const {mutate: uploadFileMutation} = useUploadFiles();

  const {
    formState: {errors},
    register,
  } = useForm<{file: FileList; tag: string}>({
    resolver: yupResolver(schema),
  });

  // handle email input separately
  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    formState: emailFormState,
  } = useForm<{email: string}>();

  // https://pinoria.com/how-to-add-typescript-types-for-react-checkbox-events-and-handlers/#:~:text=To%20add%20TypeScript%20types%20for%20React%20checkbox%20events,%7D%3B%20return%20%3Cinput%20type%3D%22checkbox%22%20onChange%3D%20%7BonChange%7D%20%2F%3E%3B%20%7D%3B

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null) {
      const newFile = e.target.files[0];
      setFile({file: newFile, tag: ''});
      // console.log( 'New File\t', { file: e.target.files[ 0 ] } );
    }
  };

  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log( 'tagging an image' );
    if (e.target.value !== '') {
      const tag = e.target.value;
      setTag(tag);
    }
  };

  const addTagToImage = (e: MouseEvent<HTMLButtonElement>) => {
    // TODO: prevent multiple repeated selection
    setFiles([...files, {...file, tag}]);
    // reset tag input
    setTag('');
  };

  const uploadFiles = (email: string) => {
    const form = new FormData();

    for (const file of files) {
      form.append('files', file as any);
    }
    // reciever's email address
    form.append('email', email);

    // console.log( 'File is uploading...' );
    uploadFileMutation(form, {
      onSuccess({data, status}) {
        // reset list is successful
        setFiles([]);
        console.log({data, status});
      },
    });
    // console.log( 'File is uploaded.' );
  };

  return (
    <section className='uploader'>
      <form className='home__content--file-transfer'>
        {!files.length && <Error message={errors.file?.message as string} />}
        <div className='carpet'>
          <div className='transfer-container'>
            <input
              type='file'
              accept='image/png, image/jpg, image/jpeg'
              {...register('file', {required: true})}
              className='file-input'
              onChange={handleFileChange}
            />
            <button className='btn btn--upload'>
              <SelectButtonIcon /> Select
            </button>
          </div>

          <p className='supported-types'>jpeg, png, and jpg</p>
        </div>
        <div className='image-tag'>
          <input
            type='text'
            {...register('tag', {required: true})}
            className='tag-input'
            onChange={handleTagChange}
          />
          <button className='btn btn-addToList' onClick={addTagToImage}>
            Add to List
          </button>
        </div>
      </form>

      <form
        className='receiver-details'
        onSubmit={handleEmailSubmit(({email}) => uploadFiles(email))}
      >
        <div className='input-container'>
          {emailFormState.errors.email?.message?.length && (
            <Error message={emailFormState.errors.email?.message as string} />
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
            {...registerEmail('email')}
          />
        </div>

        <button type='submit' className='btn btn--upload'>
          Upload
          <UploadButtonIcon stroke='#44445f' />
        </button>
      </form>
    </section>
  );
}
