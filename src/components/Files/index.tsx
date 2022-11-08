import {useState} from 'react';
import {useFetchAllFiles} from '../../api/queries';
import Header from '../Header';
import FileCard from './FileCard';
import loadingIcon from '../../assets/loader-loading-progress-wait-icon.png';

export default function Files() {
  const [isOpen, setIsOpen] = useState(false);
  const {isLoading, data: sharedFiles, isError} = useFetchAllFiles();

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
              />
            </label>
          </div>
        </div>

        {isLoading && (
          <img className='mx-auto loading' src={loadingIcon} alt='Loading...' />
        )}
        {isError && (
          <div className='error error--custom'>Loading Files has failed.</div>
        )}

        <div className='files__list'>
          {sharedFiles &&
            sharedFiles.map((file) => (
              <FileCard
                key={file.name}
                date={file.date}
                fileType={file.fileType}
                name={file.name}
                receiverEmail={file.receiverEmail}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
