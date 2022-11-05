import FileCard from './FileCard';
import {AsidePropsType} from './interface';

export default function AsideComponent({files, isOpen}: AsidePropsType) {
  return (
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
          {!files.length && <div className='file'>No Shared file</div>}
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
  );
}
