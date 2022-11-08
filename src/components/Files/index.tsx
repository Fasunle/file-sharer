import {useState} from 'react';
import Header from '../Header';

export default function Files() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='files-container'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className='files'>
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

        <div className='files__list'>
          <div className='files__list--item'>
            <div className='info'>
              <h2 className='name'>Filename</h2>
              <p className='type'>Type</p>
              <p className='file-size'>54 kb</p>
            </div>
            <div className='receiver'>
              <h3>Receiver's Name</h3>
              <p className='receiver-email'>kfasunle@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
