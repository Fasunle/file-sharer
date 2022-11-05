import {useState} from 'react';
import Header from '../Header';
import AsideComponent from './Aside';
import {IFileCardProps} from './interface';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const files: IFileCardProps[] = [];
  return (
    <section className='home'>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <main className='home__content'>Main</main>
      <AsideComponent files={files} isOpen={isOpen} />
    </section>
  );
}
