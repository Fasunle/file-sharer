import {useEffect, useState} from 'react';
import Header from '../Header';
import AsideComponent from './Aside';
import FileUpload from './FileUpload';
import HeroComponent from './HeroBanner';
import {IFileResponse} from '../interface';
import {useNavigate} from 'react-router-dom';
import {fetchAllFiles} from '../../api/queries';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState<IFileResponse[]>([]);

  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === null) navigate('/auth/login');
  }, []);

  useEffect(() => {
    fetchAllFiles().then((data) => setFiles(data.data.files as any));
  }, []);

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
