import FileCard from './FileCard';
import {AsidePropsType} from '../interface';
import {useEffect, useState} from 'react';
import {fetchUser} from '../../api/queries';
import {useNavigate} from 'react-router-dom';
import {IUser} from '../../api/interface';

const initalUserState = {
  email: 'abc@tenatica.com',
  userId: '',
  username: 'Anonymous',
};

export default function AsideComponent({files, isOpen}: AsidePropsType) {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>(initalUserState);
  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId !== null && userId !== '') {
      fetchUser(userId).then((data) => setUser(data.data));
    } else {
      navigate('/auth/login');
    }
  }, [user]);
  return (
    <aside className={`home__sidebar ${isOpen && 'show-sidebar'}`}>
      <ul className='user-info'>
        <li className='username'>
          <h2>{user.username}</h2> <span></span>
        </li>
        <li className='email'>{user.email}</li>
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
