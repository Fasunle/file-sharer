import {useEffect, useState} from 'react';
import {fetchAllFiles} from '../../api/queries';
import Header from '../Header';
import FileCard from './FileCard';
import loadingIcon from '../../assets/loader-loading-progress-wait-icon.png';
import {IFileResponse} from '../interface';
import {useNavigate} from 'react-router-dom';

export default function Files() {
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTag] = useState('');
  const [sharedFiles, setSharedFiles] = useState<IFileResponse[]>([]);

  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  console.log(sharedFiles);

  useEffect(() => {
    if (accessToken === null) navigate('/auth/login');
    fetchAllFiles()
      .then((data) => {
        let files = data.data.files;

        if (tag !== '') {
          files = files.filter((file) => file.tag === tag);
        }

        setSharedFiles(files as any);
      })
      .catch((error) => console.error({error}));
  }, [tag]);

  return (
    <main className='files-container'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <section className='files'>
        <div className='files__header'>
          <h1 className='title'>Shared Files</h1>
          <div className='search-box'>
            <label htmlFor='search' className='input--label'>
              <button className='btn btn--search'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-10 h-10 icon'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>

              <input
                type='text'
                name='search'
                className='search--input'
                placeholder='search'
                onChange={(e) => setTag(e.target.value)}
              />
            </label>
          </div>
        </div>

        {/*{sharedFiles?.length && (
          <img className='mx-auto loading' src={loadingIcon} alt='Loading...' />
        )}
        {isError && (
          <div className='error error--custom'>Loading Files has failed.</div>
        )} */}

        <div className='files__list'>
          {sharedFiles?.map((file) => (
            <FileCard
              key={file.filename}
              date={file.date}
              fileType={file.contentType}
              name={file.filename}
              receiverEmail={file.receiverEmail}
              fileUrl={file.fileUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
