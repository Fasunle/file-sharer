import {useState} from 'react';
import Header from '../Header';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='home'>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <main className='home__content'>Main</main>
      <aside className={`home__sidebar ${isOpen && 'show-sidebar'}`}>
        Aside
      </aside>
    </section>
  );
}
