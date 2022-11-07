import {IFileCardProps} from '../interface';

export default function FileCard({name, size, type}: IFileCardProps) {
  return (
    <div className='file'>
      <h4 className='name'>{name}</h4>
      <p className='type'>{type}</p>
      <p className='size'>{size}</p>
    </div>
  );
}
