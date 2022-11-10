import {useEffect, useState} from 'react';
import Header from '../Header';
import AsideComponent from './Aside';
import FileUpload from './FileUpload';
import HeroComponent from './HeroBanner';
import {IFileCardProps} from '../interface';
import {Navigate, useNavigate} from 'react-router-dom';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === null) navigate('/auth/login');
  }, []);

  const files: IFileCardProps[] = [];
  return (
    <section className='home'>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <main className='home__content'>
        <HeroComponent />
        <FileUpload />
        {/* <section className='home_content--more'>More</section> */}
      </main>
      <AsideComponent files={files} isOpen={isOpen} />
    </section>
  );
}
