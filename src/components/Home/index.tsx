import {useState} from 'react';
import Header from '../Header';
import AsideComponent from './Aside';
import FileUpload from './FileUpload';
import HeroComponent from './HeroBanner';
import {IFileCardProps} from './interface';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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
