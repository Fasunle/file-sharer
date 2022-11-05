import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/tenatica-logo.svg';

export default function Header({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => any;
}) {
  const [avatarUrl, setAvatarUrl] = useState('');
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__nav--items'>
          <li className='header__nav--item'>
            <Link to='/'>
              <img src={logo} alt='tenatica logo' className='logo' />
            </Link>
          </li>

          <li className='header__nav--item menu'>
            <button title='menu' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#191923'
                  className='w-12 h-12'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#191923'
                  className='w-12 h-12'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              )}
            </button>
          </li>

          <li className='header__nav--item user-profile'>
            {avatarUrl ? (
              <img src={avatarUrl} alt='tenatica logo' title='user' />
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='#191923'
                className='w-12 h-12'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
