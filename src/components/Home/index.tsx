import {useState} from 'react';
import Header from '../Header';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='home'>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <main className='home__content'>Main</main>
      <aside className={`home__sidebar ${isOpen && 'show-sidebar'}`}>
        <ul className='user-info'>
          <li className='username'>
            <h2>Kehinde Fasunle</h2> <span></span>
          </li>
          <li className='email'>kfasunle@gmail.com</li>
        </ul>
      </aside>
    </section>
  );
}
