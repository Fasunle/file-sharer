import {DateTime} from 'luxon';
import {FileCardPropTypes} from './interface';

export default function FileCard({
  date,
  name,
  fileType,
  receiverEmail,
}: FileCardPropTypes) {
  const time = DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_FULL);

  return (
    <div className='files__list--item'>
      <div className='info'>
        <div className='name'>
          <h2 className='title'>Name</h2>
          <p className='name-desc'>{name.replace('images/', '')}</p>
        </div>
        <p className='type'>{fileType}</p>
      </div>
      <div className='receiver'>
        <h3 className='receiver--title'>Receiver's Name</h3>
        <p className='receiver--email'>{receiverEmail}</p>
      </div>
      <div className='shared-time'>
        <h4 className='time'>Date</h4>
        <p className='date'>{time}</p>
      </div>
    </div>
  );
}
