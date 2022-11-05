import {useState} from 'react';
import Header from '../Header';
import FileCard from './FileCard';
import {IFileCardProps} from './interface';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const files: IFileCardProps[] = [];
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

        <ul className='file__share'>
          <h3 className='title'>Recently Shared</h3>
          <li className='files'>
            {files.map((file) => (
              <FileCard
                key={file.name}
                name={file.name}
                size={file.size}
                type={file.type}
              />
            ))}
          </li>
        </ul>
      </aside>
    </section>
  );
}
